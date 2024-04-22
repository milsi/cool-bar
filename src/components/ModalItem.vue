<script setup lang="ts">
const emit = defineEmits(['saveChanges', 'closeModal']);

const saveChanges = () => {
  closeModal();
  emit('saveChanges');
};

const closeModal = () => {
  emit('closeModal');
};
</script>
<template>
  <!-- <button class="btn" onclick="my_modal_1.showModal()">open modal</button> -->
  <div id="my_modal_1" class="modal modal-open">
    <div class="inside modal-box">
      <form method="dialog">
        <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2" @click="closeModal">
          ✕
        </button>
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
  </div>
</template>
<style scoped>
.inside {
  border-radius: 30px;
  background: linear-gradient(45deg, #e6e6e6, #fff);

  /* box-shadow:
    20px -20px 40px #d9d9d9,
    -20px 20px 40px #fff; */
}
</style>
