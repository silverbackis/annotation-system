<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg w-96 max-w-full">
      <h3 class="text-lg font-semibold mb-4">Add New Group to {{ documentId }}</h3>

      <div class="space-y-4">
        <div>
          <label class="block mb-1">Group ID (number):</label>
          <input
            v-model="group.id"
            type="number"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="e.g., 1, 2, 100"
          />
        </div>

        <div>
          <label class="block mb-1">Group Name:</label>
          <input
            v-model="group.name"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="e.g., Control group"
          />
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
          @click="addGroup"
          class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Add Group
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddGroupModal',
  props: {
    documentId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      group: {
        id: '',
        name: ''
      }
    };
  },
  methods: {
    addGroup() {
      // Validate inputs
      if (!this.group.id || !this.group.name) {
        alert('Please fill in all group fields');
        return;
      }

      // Emit event to add group
      this.$emit('add-group', { ...this.group });
    }
  }
};
</script>