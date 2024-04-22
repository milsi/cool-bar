<script setup lan="ts">
const emit = defineEmits(['saveChanges']);

const saveChanges = () => {
  emit('saveChanges');
};
</script>
<template>
  <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="text-lg font-bold"><slot name="heading"></slot></h3>
      <slot name="details" class="py-4"></slot>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn btn-accent" @click="saveChanges">Save</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
