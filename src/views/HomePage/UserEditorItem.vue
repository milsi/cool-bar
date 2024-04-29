<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import Modal from '@/components/ModalItem.vue';
import { useAppLocalStorageStore } from '@/stores/localStorage';
import { useShowEditUserProfileStore } from '@/stores/showModals';

const AppLocalStorageStore = useAppLocalStorageStore();
const { appLocalStorage } = storeToRefs(AppLocalStorageStore);
const userProfile = appLocalStorage.value.userProfile;

const ShowEditUserProfileStore = useShowEditUserProfileStore();
const { showEditUserProfile } = storeToRefs(ShowEditUserProfileStore);

const emit = defineEmits(['profile-updated']);

const userProfileWrite = ref(JSON.parse(JSON.stringify(userProfile)));

const saveChanges = () => {
  appLocalStorage.value.userProfile = userProfileWrite.value;
  AppLocalStorageStore.updateUserProfile(userProfileWrite.value);
  emit('profile-updated', userProfileWrite.value);
};

const closeModal = () => {
  showEditUserProfile.value = false;
};

const nameCharCount = ref(userProfileWrite.value.name.length);
watch(userProfileWrite.value, (newVal) => {
  nameCharCount.value = newVal.name.length;
  if (nameCharCount.value < 1 || nameCharCount.value > 20) {
    deactivateSave.value = true;
  } else {
    deactivateSave.value = false;
  }
});

const deactivateSave = ref<boolean>(false);
</script>

<template>
  <Modal
    @saveChanges="saveChanges"
    @closeModal="closeModal"
    :deactivateSave="deactivateSave"
    :showDelete="false"
  >
    <template #heading>edit your profile.</template>
    <template #details>
      <form class="m-8 grid grid-cols-1 place-content-center gap-4">
        <label for="name" class="font-medium text-gray-900">name</label>
        <input
          type="text"
          v-model="userProfileWrite.name"
          placeholder="name"
          :class="{
            'input-error': nameCharCount < 1 || nameCharCount > 20,
          }"
          class="input input-bordered w-full"
          id="name"
        />
        <span
          :class="{
            'text-error': nameCharCount < 1 || nameCharCount > 20,
            'text-neutral-content': nameCharCount >= 1 && nameCharCount <= 20,
          }"
          class="text-xs"
          >{{ nameCharCount }} / 20</span
        >
        <label for="age" class="font-medium text-gray-900">age</label>
        <input
          type="number"
          min="16"
          max="99"
          pattern="[0-9]*"
          set="1"
          v-model="userProfileWrite.age"
          placeholder="Age"
          class="input input-bordered w-full"
          id="age"
        />
        <label for="sex" class="font-medium text-gray-900">sex</label>
        <select v-model="userProfileWrite.sex" class="select select-bordered w-full" id="sex">
          <option disabled selected>sex</option>
          <option>F</option>
          <option>M</option>
          <option>NB</option>
        </select>
        <label for="weight" class="font-medium text-gray-900">body weight, kg</label>
        <input
          type="number"
          min="40"
          max="200"
          pattern="[0-9]*"
          v-model="userProfileWrite.bodyWeight"
          placeholder="body weight, kg"
          class="input input-bordered w-full"
          id="weight"
        />
        <input
          type="range"
          min="40"
          max="200"
          class="range"
          v-model="userProfileWrite.bodyWeight"
        />
      </form>
    </template>
  </Modal>
</template>
