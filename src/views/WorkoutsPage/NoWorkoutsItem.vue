<script setup lang="ts">
const emit = defineEmits(['toggleShowAddNew']);

const toggleShowAddNew = () => {
  emit('toggleShowAddNew');
};
</script>
<template>
  <div class="grid h-80 place-content-center px-4">
    <div class="text-center">
      <h1 class="text-5xl font-black text-base-200 md:text-9xl">Hello!</h1>

      <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Looks like you're new here!
      </p>

      <p class="mt-4 text-gray-500">Add your first workout to start!</p>
      <button type="button" class="btn btn-primary mt-6" @click="toggleShowAddNew">
        Add a new workout
      </button>
    </div>
  </div>
</template>
