<script setup lang="ts">
import UserInfo from './UserInfoItem.vue';
import WeightProfiles from './WeightProfilesItem.vue';
</script>

<template>
  <main class="grid grid-cols-1 gap-x-3 md:grid-cols-2">
    <UserInfo />
    <WeightProfiles />
  </main>
</template>
