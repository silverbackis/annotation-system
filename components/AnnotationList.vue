<template>
  <div>
    <div class="mb-6 flex items-center justify-between flex-wrap gap-2">
      <h2 class="text-xl font-semibold">Annotation Management</h2>

      <div class="flex gap-2">
        <button
          type="button"
          @click="exportToExcel"
          class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          :disabled="filteredAnnotations.length === 0"
        >
          Export to Excel
        </button>
      </div>
    </div>

    <!-- Search and Filter -->
    <div class="bg-gray-100 p-4 rounded-md mb-6">
      <h3 class="font-medium mb-3">Search and Filter</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block mb-1 text-sm">Search:</label>
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Search annotations..."
            class="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label class="block mb-1 text-sm">Filter by Document:</label>
          <select
            v-model="filterDocument"
            class="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">All Documents</option>
            <option v-for="doc in documents" :key="doc.id" :value="doc.id">{{ doc.id }}</option>
          </select>
        </div>

        <div>
          <label class="block mb-1 text-sm">Filter by Group:</label>
          <select
            v-model="filterGroup"
            class="w-full p-2 border border-gray-300 rounded-md"
            :disabled="!filterDocument"
          >
            <option value="">All Groups</option>
            <option
              v-for="group in selectedDocumentGroups"
              :key="group.id"
              :value="group.id"
            >
              {{ group.id }} - {{ group.name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Annotations Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200 rounded-md">
        <thead class="bg-gray-50">
        <tr>
          <th class="py-2 px-3 text-left text-sm font-medium text-gray-500 uppercase">Document</th>
          <th class="py-2 px-3 text-left text-sm font-medium text-gray-500 uppercase">Group</th>
          <th class="py-2 px-3 text-left text-sm font-medium text-gray-500 uppercase">Entity Label</th>
          <th class="py-2 px-3 text-left text-sm font-medium text-gray-500 uppercase">Entity Type</th>
          <th class="py-2 px-3 text-left text-sm font-medium text-gray-500 uppercase">Actions</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
        <tr v-if="filteredAnnotations.length === 0">
          <td colspan="5" class="py-4 px-3 text-center text-gray-500">
            No annotations found. {{ searchTerm || filterDocument || filterGroup ? 'Try adjusting your search or filters.' : '' }}
          </td>
        </tr>
        <tr v-for="annotation in filteredAnnotations" :key="annotation.id" class="hover:bg-gray-50">
          <td class="py-3 px-3">
            <div class="text-sm font-medium">{{ annotation.documentId }}</div>
          </td>
          <td class="py-3 px-3">
            <div class="text-sm">{{ annotation.groupName }}</div>
            <div class="text-xs text-gray-500">ID: {{ annotation.groupId }}</div>
          </td>
          <td class="py-3 px-3">
            <div class="text-sm">{{ annotation.entityLabel }}</div>
          </td>
          <td class="py-3 px-3">
            <div class="text-sm">{{ annotation.entityType }}</div>
            <div class="text-xs text-gray-500">Confidence: {{ annotation.confidence }}</div>
          </td>
          <td class="py-3 px-3">
            <div class="flex space-x-2">
              <button
                @click="editAnnotation(annotation.id)"
                class="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
              >
                Edit
              </button>
              <button
                @click="confirmDeleteAnnotation(annotation)"
                class="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Delete Confirmation Modal -->
    <ConfirmDeleteModal
      v-if="showDeleteModal"
      type="annotation"
      :name="annotationToDelete ? `${annotationToDelete.documentId} - ${annotationToDelete.entityLabel}` : ''"
      @close="showDeleteModal = false"
      @confirm="deleteAnnotation"
    />
  </div>
</template>

<script>
import ConfirmDeleteModal from './modals/ConfirmDeleteModal.vue';

export default {
  name: 'AnnotationList',
  components: {
    ConfirmDeleteModal
  },
  props: {
    documents: {
      type: Array,
      required: true
    },
    annotations: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchTerm: '',
      filterDocument: '',
      filterGroup: '',
      showDeleteModal: false,
      annotationToDelete: null
    };
  },
  computed: {
    selectedDocumentGroups() {
      if (!this.filterDocument) return [];

      const doc = this.documents.find(d => d.id === this.filterDocument);
      return doc ? doc.groups : [];
    },

    filteredAnnotations() {
      return this.annotations.filter(a => {
        // Apply document filter
        if (this.filterDocument && a.documentId !== this.filterDocument) return false;

        // Apply group filter
        if (this.filterGroup && a.groupId !== parseInt(this.filterGroup)) return false;

        // Apply search
        if (this.searchTerm) {
          const searchLower = this.searchTerm.toLowerCase();
          return (
            a.documentId.toLowerCase().includes(searchLower) ||
            a.documentLabel.toLowerCase().includes(searchLower) ||
            a.groupName.toLowerCase().includes(searchLower) ||
            a.entityLabel.toLowerCase().includes(searchLower) ||
            a.entityDescription.toLowerCase().includes(searchLower)
          );
        }

        return true;
      });
    }
  },
  methods: {
    editAnnotation(annotationId) {
      this.$emit('edit-annotation', annotationId);
    },

    confirmDeleteAnnotation(annotation) {
      this.annotationToDelete = annotation;
      this.showDeleteModal = true;
    },

    deleteAnnotation() {
      if (this.annotationToDelete) {
        this.$emit('delete-annotation', this.annotationToDelete.id);
        this.showDeleteModal = false;
        this.annotationToDelete = null;
      }
    },

    exportToExcel() {
      this.$emit('export-excel');
    }
  }
};
</script>
