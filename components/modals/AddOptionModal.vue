<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg w-96 max-w-full">
      <h3 class="text-lg font-semibold mb-4">Add New Option</h3>
      <div class="mb-4">
        <label class="block mb-2">New value for {{ field }}:</label>
        <input
          v-model="value"
          type="text"
          class="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div class="flex justify-end space-x-2">
        <button
          type="button"
          @click="$emit('close')"
          class="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="button"
          @click="addOption"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddOptionModal',
  props: {
    field: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: ''
    };
  },
  methods: {
    addOption() {
      if (!this.value) {
        alert('Please enter a value');
        return;
      }

      this.$emit('add-option', this.field, this.value);
      this.$emit('close');
    }
  }
};
</script>