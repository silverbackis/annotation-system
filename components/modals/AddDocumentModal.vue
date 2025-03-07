<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg w-96 max-w-full">
      <h3 class="text-lg font-semibold mb-4">Add New Document</h3>

      <div class="space-y-4">
        <div>
          <label class="block mb-1">Document ID:</label>
          <input
            v-model="document.id"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="e.g., 155_2008_Van Nes"
          />
        </div>

        <div>
          <label class="block mb-1">Document Label:</label>
          <input
            v-model="document.label"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Document title"
          />
        </div>

        <div>
          <label class="block mb-1">Document Type:</label>
          <select
            v-model="document.type"
            class="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select document type</option>
            <option v-for="type in documentTypeOptions" :key="type" :value="type">{{ type }}</option>
          </select>
        </div>
      </div>

      <div class="flex justify-end mt-6 space-x-2">
        <button
          type="button"
          @click="$emit('close')"
          class="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="button"
          @click="addDocument"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Document
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddDocumentModal',
  props: {
    documentTypeOptions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      document: {
        id: '',
        label: '',
        type: ''
      }
    };
  },
  methods: {
    addDocument() {
      // Validate inputs
      if (!this.document.id || !this.document.label || !this.document.type) {
        alert('Please fill in all document fields');
        return;
      }

      // Emit event to add document
      this.$emit('add-document', { ...this.document });
    }
  }
};
</script>
