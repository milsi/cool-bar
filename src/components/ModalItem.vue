<script setup lang="ts">
const props = defineProps({
  isSaveDeactivated: Boolean,
  showDelete: Boolean,
});

const emit = defineEmits(['saveChanges', 'closeModal', 'deleteMovement']);

const saveChanges = () => {
  closeModal();
  emit('saveChanges');
};

const closeModal = () => {
  emit('closeModal');
};

const deleteMovement = () => {
  emit('deleteMovement');
};
</script>
<template>
  <div class="modal modal-open">
    <div class="inside modal-box">
      <form method="dialog">
        <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2" @click="closeModal">
          ✕
        </button>
      </form>
      <h3 class="text-lg font-bold"><slot name="heading"></slot></h3>
      <slot name="details" class="py-4"></slot>
      <div class="modal-action">
        <form method="dialog" class="flex space-x-4">
          <button class="btn" @click.prevent="closeModal">Cancel</button>
          <button v-if="showDelete" class="btn btn-error" @click.prevent="deleteMovement">
            Delete movement
          </button>
          <button
            :disabled="isSaveDeactivated"
            class="btn btn-secondary"
            :class="{ 'btn-disabled': isSaveDeactivated }"
            @click.prevent="saveChanges"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.inside {
  border-radius: 30px;
  background: linear-gradient(45deg, #e6e6e6, #fff);
}
</style>
