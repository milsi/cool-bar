<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import CardItem from '../CardItem.vue';
import UserEditor from './UserEditorItem.vue';
import { useAppLocalStorageStore } from '@/stores/localStorage';
import type { User } from '@/types/User';

const AppLocalStorageStore = useAppLocalStorageStore();
const { appLocalStorage } = storeToRefs(AppLocalStorageStore);

const saveChanges = (changedUserProfile: User) => {
  console.log(changedUserProfile);
  appLocalStorage.value.userProfile = changedUserProfile;
  AppLocalStorageStore.updateUserProfile(changedUserProfile);
};
</script>

<template>
  <CardItem>
    <template #heading> User information (tap to edit)</template>
    <template #details>
      <div class="flow-root">
        <dl class="-my-3 divide-y divide-gray-100 text-sm">
          <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt class="font-medium text-gray-900">Name</dt>
            <dd class="text-gray-700 sm:col-span-2">{{ appLocalStorage.userProfile.name }}</dd>
          </div>

          <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt class="font-medium text-gray-900">Age</dt>
            <dd class="text-gray-700 sm:col-span-2">{{ appLocalStorage.userProfile.age }}</dd>
          </div>

          <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt class="font-medium text-gray-900">Sex</dt>
            <dd class="text-gray-700 sm:col-span-2">{{ appLocalStorage.userProfile.sex }}</dd>
          </div>

          <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt class="font-medium text-gray-900">Body weight</dt>
            <dd class="text-gray-700 sm:col-span-2">
              {{ appLocalStorage.userProfile.bodyWeight }}
            </dd>
          </div>
        </dl>
      </div>
      <UserEditor
        :userProfile="appLocalStorage.userProfile"
        @saveChanges="saveChanges"
      ></UserEditor>
    </template>
  </CardItem>
</template>
