<script setup lang="ts">
import Modal from '../ModalItem.vue';
import type { User } from '@/types/User';
import { ref, watchEffect } from 'vue';

const props = defineProps({
  userProfile: Object as () => User,
});

const emit = defineEmits(['saveChanges']);

let userProfileWrite = ref(JSON.parse(JSON.stringify(props.userProfile)));

const saveChanges = () => {
  emit('saveChanges', userProfileWrite.value);
};
</script>

<template>
  <Modal @saveChanges="saveChanges">
    <template #heading>Edit user profile</template>
    <template #details>
      <form class="m-8 grid grid-cols-1 place-content-center gap-4">
        <input
          type="text"
          v-model="userProfileWrite.name"
          placeholder="Name"
          class="input input-bordered w-full"
        />
        <input
          type="text"
          v-model="userProfileWrite.age"
          placeholder="Age"
          class="input input-bordered w-full"
        />
        <select v-model="userProfileWrite.sex" class="select select-bordered w-full">
          <option disabled selected>Sex</option>
          <option>F</option>
          <option>M</option>
          <option>NB</option>
        </select>
        <input
          type="text"
          v-model="userProfileWrite.bodyWeight"
          placeholder="Body weight"
          class="input input-bordered w-full"
        />
      </form>
    </template>
  </Modal>
</template>
