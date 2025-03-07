<template>
  <div>
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-semibold">Document Management</h2>

      <button
        type="button"
        @click="showAddDocumentModal = true"
        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Add New Document
      </button>
    </div>

    <!-- Documents and Groups -->
    <div class="space-y-6">
      <div v-if="documents.length === 0" class="text-center p-6 bg-gray-50 rounded-md">
        <p class="text-gray-500">No documents found. Add a new document to get started.</p>
      </div>

      <div
        v-for="document in documents"
        :key="document.id"
        class="border border-gray-200 rounded-md overflow-hidden"
      >
        <div class="bg-gray-50 p-4 flex justify-between items-center">
          <div>
            <h3 class="font-medium text-lg">{{ document.id }}</h3>
            <p class="text-gray-600">{{ document.label }}</p>
            <span class="inline-block mt-1 px-2 py-1 bg-gray-200 text-xs rounded">
                {{ document.type }}
              </span>
          </div>
          <button
            @click="confirmDeleteDocument(document)"
            class="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
          >
            Delete Document
          </button>
        </div>

        <div class="p-4">
          <div class="flex justify-between items-center mb-3">
            <h4 class="font-medium">Groups</h4>
            <button
              type="button"
              @click="openAddGroupModal(document)"
              class="px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200"
            >
              Add Group
            </button>
          </div>

          <div v-if="document.groups.length === 0" class="text-sm text-gray-500">
            No groups added to this document yet.
          </div>

          <div v-else class="overflow-x-auto">
            <table class="min-w-full border border-gray-200">
              <thead class="bg-gray-50">
              <tr>
                <th class="py-2 px-3 text-left text-sm font-medium text-gray-500">ID</th>
                <th class="py-2 px-3 text-left text-sm font-medium text-gray-500">Name</th>
                <th class="py-2 px-3 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
              <tr v-for="group in document.groups" :key="group.id" class="hover:bg-gray-50">
                <td class="py-2 px-3 text-sm">{{ group.id }}</td>
                <td class="py-2 px-3 text-sm">{{ group.name }}</td>
                <td class="py-2 px-3">
                  <button
                    @click="confirmDeleteGroup(document, group)"
                    class="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Document Modal -->
    <AddDocumentModal
      v-if="showAddDocumentModal"
      :document-type-options="documentTypeOptions"
      @close="showAddDocumentModal = false"
      @add-document="handleAddDocument"
    />

    <!-- Add Group Modal -->
    <AddGroupModal
      v-if="showAddGroupModal"
      :document-id="selectedDocument ? selectedDocument.id : ''"
      @close="showAddGroupModal = false"
      @add-group="handleAddGroup"
    />

    <!-- Delete Confirmation Modal -->
    <ConfirmDeleteModal
      v-if="deleteModal.show"
      :type="deleteModal.type"
      :name="deleteModal.name"
      :doc-name="deleteModal.docName"
      @close="closeDeleteModal"
      @confirm="confirmDelete"
    />
  </div>
</template>

<script>
import AddDocumentModal from './modals/AddDocumentModal.vue';
import AddGroupModal from './modals/AddGroupModal.vue';
import ConfirmDeleteModal from './modals/ConfirmDeleteModal.vue';

export default {
  name: 'DocumentManager',
  components: {
    AddDocumentModal,
    AddGroupModal,
    ConfirmDeleteModal
  },
  props: {
    documents: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showAddDocumentModal: false,
      showAddGroupModal: false,
      selectedDocument: null,
      documentTypeOptions: [
        "Report of RCT",
        "Report of observational study"
      ],
      deleteModal: {
        show: false,
        type: null,
        id: null,
        name: '',
        docName: ''
      }
    };
  },
  methods: {
    openAddGroupModal(document) {
      this.selectedDocument = document;
      this.showAddGroupModal = true;
    },

    confirmDeleteDocument(document) {
      this.deleteModal = {
        show: true,
        type: 'document',
        id: document.id,
        name: document.label,
        docName: ''
      };
    },

    confirmDeleteGroup(document, group) {
      this.deleteModal = {
        show: true,
        type: 'group',
        id: { docId: document.id, groupId: group.id },
        name: group.name,
        docName: document.label
      };
    },

    closeDeleteModal() {
      this.deleteModal = {
        show: false,
        type: null,
        id: null,
        name: '',
        docName: ''
      };
    },

    confirmDelete() {
      if (this.deleteModal.type === 'document') {
        this.deleteDocument(this.deleteModal.id);
      } else if (this.deleteModal.type === 'group') {
        this.deleteGroup(this.deleteModal.id.docId, this.deleteModal.id.groupId);
      }

      this.closeDeleteModal();
    },

    handleAddDocument(newDocument) {
      // Create new document object
      const docToAdd = {
        ...newDocument,
        groups: []
      };

      // Add to documents list
      const updatedDocs = [...this.documents, docToAdd];

      // Emit event to update documents in the parent component
      this.$emit('update-documents', updatedDocs);

      // Close modal
      this.showAddDocumentModal = false;
    },

    handleAddGroup(newGroup) {
      if (!this.selectedDocument) return;

      // Create new group object
      const groupToAdd = {
        id: parseInt(newGroup.id),
        name: newGroup.name
      };

      // Update document with new group
      const updatedDocs = this.documents.map(doc => {
        if (doc.id === this.selectedDocument.id) {
          return {
            ...doc,
            groups: [...doc.groups, groupToAdd]
          };
        }
        return doc;
      });

      // Emit event to update documents in the parent component
      this.$emit('update-documents', updatedDocs);

      // Close modal
      this.showAddGroupModal = false;
    },

    deleteDocument(documentId) {
      // Remove the document
      const updatedDocs = this.documents.filter(doc => doc.id !== documentId);

      // Emit event to update documents in the parent component
      this.$emit('update-documents', updatedDocs);

      // Also need to remove associated annotations
      this.$emit('update-annotations',
        this.$parent.annotations.filter(a => a.documentId !== documentId)
      );
    },

    deleteGroup(documentId, groupId) {
      // Update document by removing the group
      const updatedDocs = this.documents.map(doc => {
        if (doc.id === documentId) {
          return {
            ...doc,
            groups: doc.groups.filter(g => g.id !== groupId)
          };
        }
        return doc;
      });

      // Emit event to update documents in the parent component
      this.$emit('update-documents', updatedDocs);

      // Also need to remove associated annotations
      this.$emit('update-annotations',
        this.$parent.annotations.filter(a =>
          !(a.documentId === documentId && a.groupId === groupId)
        )
      );
    }
  }
};
</script>
