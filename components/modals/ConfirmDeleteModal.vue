<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg w-96 max-w-full">
      <h3 class="text-lg font-semibold mb-2 text-red-600">Confirm Delete</h3>

      <p v-if="type === 'document'" class="mb-4">
        Are you sure you want to delete the document "{{ name }}"? This will also delete all
        associated groups and annotations. This action cannot be undone.
      </p>

      <p v-if="type === 'group'" class="mb-4">
        Are you sure you want to delete the group "{{ name }}" from document "{{ docName }}"?
        This will also delete all associated annotations. This action cannot be undone.
      </p>

      <p v-if="type === 'annotation'" class="mb-4">
        Are you sure you want to delete the annotation "{{ name }}"?
        This action cannot be undone.
      </p>

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
          @click="$emit('confirm')"
          class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmDeleteModal',
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    docName: {
      type: String,
      default: ''
    }
  }
};
</script>
