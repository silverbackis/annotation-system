<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Editing indicator -->
    <div v-if="isEditing" class="bg-yellow-100 p-4 rounded-md mb-4">
      <p class="font-medium text-yellow-800">
        Editing annotation: {{ formData.documentId }} - {{ formData.entityLabel }}
      </p>
      <button
        type="button"
        @click="cancelEditing"
        class="mt-2 text-sm text-yellow-800 underline"
      >
        Cancel editing
      </button>
    </div>

    <!-- Document Information -->
    <div class="bg-blue-50 p-4 rounded-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-blue-700">Document Information</h2>
        <button
          type="button"
          @click="showAddDocumentModal = true"
          class="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add New Document
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-medium">Document ID:</label>
          <select
            v-model="formData.documentId"
            @change="handleDocumentChange"
            :disabled="isEditing"
            class="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a document</option>
            <option v-for="doc in documents" :key="doc.id" :value="doc.id">{{ doc.id }}</option>
          </select>
        </div>

        <div>
          <label class="block mb-2 font-medium">Document Type:</label>
          <div class="flex">
            <select
              v-model="formData.documentType"
              :disabled="isEditing"
              class="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select document type</option>
              <option v-for="type in dropdownOptions.documentType" :key="type" :value="type">{{ type }}</option>
            </select>
            <button
              type="button"
              @click="openAddOptionModal('documentType')"
              :disabled="isEditing"
              class="ml-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <label class="block mb-2 font-medium">Document Label:</label>
        <input
          v-model="formData.documentLabel"
          type="text"
          :disabled="isEditing"
          class="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>

    <!-- Group Information -->
    <div class="bg-green-50 p-4 rounded-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-green-700">Group Information</h2>
        <button
          type="button"
          @click="showAddGroupModal = true"
          :disabled="!currentDocument || isEditing"
          class="px-3 py-2 rounded-md"
          :class="currentDocument && !isEditing
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'"
        >
          Add New Group
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-medium">Group ID:</label>
          <select
            v-model="formData.groupId"
            @change="handleGroupChange"
            :disabled="!formData.documentId || isEditing"
            class="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a group</option>
            <option v-for="group in groups" :key="group.id" :value="group.id">{{ group.id }}</option>
          </select>
        </div>

        <div>
          <label class="block mb-2 font-medium">Group Name:</label>
          <input
            v-model="formData.groupName"
            type="text"
            :disabled="isEditing"
            class="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>

    <!-- Entity Information -->
    <div class="bg-purple-50 p-4 rounded-md">
      <h2 class="text-xl font-semibold mb-4 text-purple-700">Entity Information</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block mb-2 font-medium">Entity Type:</label>
          <div class="flex">
            <select
              v-model="formData.entityType"
              class="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select entity type</option>
              <option v-for="type in dropdownOptions.entityType" :key="type" :value="type">{{ type }}</option>
            </select>
            <button
              type="button"
              @click="openAddOptionModal('entityType')"
              class="ml-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label class="block mb-2 font-medium">Confidence:</label>
          <div class="flex">
            <select
              v-model="formData.confidence"
              class="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select confidence level</option>
              <option v-for="option in dropdownOptions.confidence" :key="option" :value="option">{{ option }}</option>
            </select>
            <button
              type="button"
              @click="openAddOptionModal('confidence')"
              class="ml-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 mb-4">
        <div>
          <label class="block mb-2 font-medium">Entity Label:</label>
          <input
            v-model="formData.entityLabel"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="e.g., average driving speed"
          />
        </div>

        <div>
          <label class="block mb-2 font-medium">Entity Description:</label>
          <textarea
            v-model="formData.entityDescription"
            rows="3"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Describe the entity in detail"
          ></textarea>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block mb-2 font-medium">Revised Entity Label:</label>
          <input
            v-model="formData.revisedEntityLabel"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label class="block mb-2 font-medium">Effective:</label>
          <div class="flex items-center">
            <input
              v-model="formData.effective"
              type="checkbox"
              class="h-5 w-5 text-blue-600 border-gray-300 rounded"
            />
            <span class="ml-2">Yes, this entity represents an effective intervention</span>
          </div>
        </div>
      </div>

      <div>
        <label class="block mb-2 font-medium">Revised Entity Description:</label>
        <textarea
          v-model="formData.revisedEntityDescription"
          rows="3"
          class="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
      </div>
    </div>

    <!-- Entity Value Information -->
    <div class="bg-yellow-50 p-4 rounded-md">
      <h2 class="text-xl font-semibold mb-4 text-yellow-700">Entity Value Information</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label class="block mb-2 font-medium">Entity Value:</label>
          <input
            v-model="formData.entityValue"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="e.g., 78"
          />
        </div>

        <div>
          <label class="block mb-2 font-medium">Entity Value Data Type:</label>
          <div class="flex">
            <select
              v-model="formData.entityValueDataType"
              class="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select data type</option>
              <option v-for="option in dropdownOptions.entityValueDataType" :key="option" :value="option">{{ option }}</option>
            </select>
            <button
              type="button"
              @click="openAddOptionModal('entityValueDataType')"
              class="ml-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label class="block mb-2 font-medium">Entity Value Stats Type:</label>
          <div class="flex">
            <select
              v-model="formData.entityValueStatsType"
              class="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select stats type</option>
              <option v-for="option in dropdownOptions.entityValueStatsType" :key="option" :value="option">{{ option }}</option>
            </select>
            <button
              type="button"
              @click="openAddOptionModal('entityValueStatsType')"
              class="ml-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label class="block mb-2 font-medium">Entity Value Dispersion:</label>
          <input
            v-model="formData.entityValueDispersion"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="e.g., 5.2"
          />
        </div>

        <div>
          <label class="block mb-2 font-medium">Entity Value Dispersion Type:</label>
          <div class="flex">
            <select
              v-model="formData.entityValueDispersionType"
              class="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select dispersion type</option>
              <option v-for="option in dropdownOptions.entityValueDispersionType" :key="option" :value="option">{{ option }}</option>
            </select>
            <button
              type="button"
              @click="openAddOptionModal('entityValueDispersionType')"
              class="ml-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label class="block mb-2 font-medium">Unit of Measurement:</label>
          <input
            v-model="formData.entityValueUnitOfMeasurement"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="e.g., km/h"
          />
        </div>
      </div>
    </div>

    <!-- Context and Additional Information -->
    <div class="bg-red-50 p-4 rounded-md">
      <h2 class="text-xl font-semibold mb-4 text-red-700">Context and Additional Information</h2>

      <div class="mb-4">
        <label class="block mb-2 font-medium">Context:</label>
        <textarea
          v-model="formData.context"
          rows="4"
          class="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Add relevant context from the document"
        ></textarea>
      </div>

      <div class="mb-4">
        <label class="block mb-2 font-medium">Comment:</label>
        <textarea
          v-model="formData.comment"
          rows="3"
          class="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Add any comments"
        ></textarea>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-medium">Person:</label>
          <input
            v-model="formData.person"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your initials"
          />
        </div>

        <div>
          <label class="block mb-2 font-medium">Questions for RW:</label>
          <input
            v-model="formData.questionsForRW"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div class="mt-4">
        <label class="block mb-2 font-medium">Notes relating to questions for RW:</label>
        <textarea
          v-model="formData.notes"
          rows="3"
          class="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="flex justify-end">
      <button
        type="submit"
        class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {{ isEditing ? 'Update Annotation' : 'Save Annotation' }}
      </button>
    </div>

    <!-- Add Document Modal -->
    <AddDocumentModal
      v-if="showAddDocumentModal"
      :document-type-options="dropdownOptions.documentType"
      @close="showAddDocumentModal = false"
      @add-document="handleAddDocument"
    />

    <!-- Add Group Modal -->
    <AddGroupModal
      v-if="showAddGroupModal"
      :document-id="currentDocument ? currentDocument.id : ''"
      @close="showAddGroupModal = false"
      @add-group="handleAddGroup"
    />

    <!-- Add Option Modal -->
    <AddOptionModal
      v-if="addOptionModal.field"
      :field="addOptionModal.field"
      @close="addOptionModal.field = null"
      @add-option="handleAddOption"
    />

    <!-- Delete Confirmation Modal -->
    <ConfirmDeleteModal
      v-if="deleteConfirmModal.type"
      :type="deleteConfirmModal.type"
      :name="deleteConfirmModal.name"
      :doc-name="deleteConfirmModal.docName"
      @close="deleteConfirmModal = { type: null, id: null, name: '', docName: '' }"
      @confirm="handleConfirmDelete"
    />
  </form>
</template>

<script>
import AddDocumentModal from './modals/AddDocumentModal.vue';
import AddGroupModal from './modals/AddGroupModal.vue';
import AddOptionModal from './modals/AddOptionModal.vue';
import ConfirmDeleteModal from './modals/ConfirmDeleteModal.vue';

export default {
  name: 'AnnotationForm',
  components: {
    AddDocumentModal,
    AddGroupModal,
    AddOptionModal,
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
    },
    dropdownOptions: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isEditing: false,
      currentDocument: null,
      currentGroup: null,
      groups: [],
      formData: this.getEmptyFormData(),
      showAddDocumentModal: false,
      showAddGroupModal: false,
      addOptionModal: { field: null },
      deleteConfirmModal: { type: null, id: null, name: '', docName: '' }
    };
  },
  created() {
    // Listen for edit annotation event
    // this.$root.$on('edit-annotation', this.loadAnnotationForEdit);
  },
  beforeDestroy() {
    // Clean up event listener
    // this.$root.$off('edit-annotation', this.loadAnnotationForEdit);
  },
  methods: {
    getEmptyFormData() {
      return {
        id: '',
        documentId: '',
        documentLabel: '',
        documentType: '',
        groupId: '',
        groupName: '',
        entityType: '',
        confidence: '',
        entityLabel: '',
        entityDescription: '',
        revisedEntityLabel: '',
        revisedEntityDescription: '',
        effective: true,
        entityValue: '',
        entityValueDataType: '',
        entityValueStatsType: '',
        entityValueDispersion: '',
        entityValueDispersionType: '',
        entityValueUnitOfMeasurement: '',
        context: '',
        comment: '',
        person: '',
        questionsForRW: '',
        notes: ''
      };
    },

    handleDocumentChange() {
      const selectedDoc = this.documents.find(doc => doc.id === this.formData.documentId);

      this.currentDocument = selectedDoc;

      if (selectedDoc) {
        // Update form data with document details
        this.formData.documentLabel = selectedDoc.label;
        this.formData.documentType = selectedDoc.type;
        this.formData.groupId = '';
        this.formData.groupName = '';

        // Update available groups for this document
        this.groups = selectedDoc.groups;
        this.currentGroup = null;
      } else {
        // Clear form if no document is selected
        this.formData.documentLabel = '';
        this.formData.documentType = '';
        this.formData.groupId = '';
        this.formData.groupName = '';
        this.groups = [];
        this.currentGroup = null;
      }
    },

    handleGroupChange() {
      const selectedGroup = this.groups.find(group => group.id === parseInt(this.formData.groupId));

      this.currentGroup = selectedGroup;

      if (selectedGroup) {
        // Update form data with group details
        this.formData.groupName = selectedGroup.name;
      } else {
        // Clear group name if no group is selected
        this.formData.groupName = '';
      }
    },

    openAddOptionModal(field) {
      this.addOptionModal = { field };
    },

    // Continuing from AnnotationForm.vue script section

    loadAnnotationForEdit(annotationId) {
      const annotationToEdit = this.annotations.find(a => a.id === annotationId);

      if (annotationToEdit) {
        this.formData = { ...annotationToEdit };

        // Ensure proper typing for group ID (it's stored as a number)
        this.formData.groupId = parseInt(this.formData.groupId);

        // Set current document and load its groups
        const doc = this.documents.find(d => d.id === this.formData.documentId);
        if (doc) {
          this.currentDocument = doc;
          this.groups = doc.groups;

          // Set current group
          const group = doc.groups.find(g => g.id === this.formData.groupId);
          if (group) {
            this.currentGroup = group;
          }
        }

        this.isEditing = true;
      }
    },

    cancelEditing() {
      this.formData = this.getEmptyFormData();
      this.isEditing = false;
    },

    handleSubmit() {
      // Basic validation for required fields
      const requiredFields = ['documentId', 'groupId', 'entityType', 'confidence', 'entityLabel'];
      const missingFields = requiredFields.filter(field => !this.formData[field]);

      if (missingFields.length > 0) {
        alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
        return;
      }

      let updatedAnnotations;

      if (this.isEditing) {
        // Update existing annotation
        updatedAnnotations = this.annotations.map(a =>
          a.id === this.formData.id ? { ...this.formData } : a
        );

        alert('Annotation updated successfully!');
      } else {
        // Create new annotation with a unique ID
        const newAnnotation = {
          ...this.formData,
          id: `annotation_${Date.now()}`,
          timestamp: new Date().toISOString()
        };

        updatedAnnotations = [...this.annotations, newAnnotation];
        alert('Annotation saved successfully!');
      }

      // Emit event to update annotations in the parent component
      this.$emit('update-annotations', updatedAnnotations);

      // Reset form and editing state
      this.formData = this.getEmptyFormData();
      this.isEditing = false;
    },

    handleAddDocument(newDocument) {
      // Check if document ID already exists
      if (this.documents.some(doc => doc.id === newDocument.id)) {
        alert('A document with this ID already exists');
        return;
      }

      // Create new document object with empty groups array
      const docToAdd = {
        ...newDocument,
        groups: []
      };

      // Add to documents list
      const updatedDocs = [...this.documents, docToAdd];

      // Emit event to update documents in the parent component
      this.$emit('update-documents', updatedDocs);

      // Select the newly created document
      this.currentDocument = docToAdd;
      this.formData.documentId = docToAdd.id;
      this.formData.documentLabel = docToAdd.label;
      this.formData.documentType = docToAdd.type;
      this.groups = [];

      // Close modal
      this.showAddDocumentModal = false;
    },

    handleAddGroup(newGroup) {
      // Check if group ID already exists in this document
      if (this.groups.some(g => g.id === parseInt(newGroup.id))) {
        alert('A group with this ID already exists in this document');
        return;
      }

      // Create new group object
      const groupToAdd = {
        id: parseInt(newGroup.id),
        name: newGroup.name
      };

      // Add to groups for current document
      const updatedGroups = [...this.groups, groupToAdd];

      // Update document with new group
      const updatedDocs = this.documents.map(doc => {
        if (doc.id === this.currentDocument.id) {
          return { ...doc, groups: updatedGroups };
        }
        return doc;
      });

      // Emit event to update documents in the parent component
      this.$emit('update-documents', updatedDocs);

      // Update local groups array
      this.groups = updatedGroups;

      // Select the newly created group
      this.currentGroup = groupToAdd;
      this.formData.groupId = groupToAdd.id;
      this.formData.groupName = groupToAdd.name;

      // Close modal
      this.showAddGroupModal = false;
    },

    handleAddOption(field, value) {
      if (!field || !value) return;

      // Make sure we don't add duplicates
      if (!this.dropdownOptions[field].includes(value)) {
        const updatedOptions = [...this.dropdownOptions[field], value];

        // Emit event to update dropdown options in the parent component
        this.$emit('update-dropdown-options', field, updatedOptions);
      }

      // Close modal
      this.addOptionModal.field = null;
    },

    handleConfirmDelete() {
      // Implementation depends on the deletion type
      // This would be implemented if we had delete functionality in this component
      this.deleteConfirmModal = { type: null, id: null, name: '', docName: '' };
    }
  }
};
</script>