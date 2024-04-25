<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import CardItem from '../../components/CardItem.vue';
import UserEditor from './UserEditorItem.vue';
import { useShowEditUserProfileStore } from '@/stores/showModals';
import { useAppLocalStorageStore } from '@/stores/localStorage';
import type { User } from '@/types/User';

const AppLocalStorageStore = useAppLocalStorageStore();
const { appLocalStorage } = storeToRefs(AppLocalStorageStore);
const userProfile = appLocalStorage.value.userProfile;

const userProfileRead = ref(JSON.parse(JSON.stringify(userProfile)));

const ShowEditUserProfileStore = useShowEditUserProfileStore();
const { showEditUserProfile } = storeToRefs(ShowEditUserProfileStore);
const showEditUserProfileModal = ref(false);

const updateProfile = (newProfile: User) => {
  userProfileRead.value = newProfile;
};

watch(showEditUserProfile, (newValue, oldValue) => {
  showEditUserProfileModal.value = newValue;
});
</script>

<template>
  <UserEditor v-if="showEditUserProfileModal" @profile-updated="updateProfile"></UserEditor>
  <CardItem @click="ShowEditUserProfileStore.toggleShowEditUserProfile">
    <template #heading> User information (tap to edit)</template>
    <template #details>
      <div class="flow-root">
        <dl class="-my-3 divide-y divide-gray-100 text-sm">
          <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt class="font-medium text-gray-900">Name</dt>
            <dd class="text-gray-700 sm:col-span-2">{{ userProfileRead.name }}</dd>
          </div>

          <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt class="font-medium text-gray-900">Age</dt>
            <dd class="text-gray-700 sm:col-span-2">{{ userProfileRead.age }}</dd>
          </div>

          <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt class="font-medium text-gray-900">Sex</dt>
            <dd class="text-gray-700 sm:col-span-2">{{ userProfileRead.sex }}</dd>
          </div>

          <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt class="font-medium text-gray-900">Body weight</dt>
            <dd class="text-gray-700 sm:col-span-2">
              {{ userProfileRead.bodyWeight }}
            </dd>
          </div>
        </dl>
      </div>
    </template>
  </CardItem>
</template>
