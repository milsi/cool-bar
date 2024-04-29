<script setup lang="ts">
import UserInfo from './UserInfoItem.vue';
import Instructions from './InstructionsItem.vue';
import AppFuture from './AppFutureItem.vue';
</script>

<template>
  <main class="grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-2">
    <UserInfo />
    <Instructions />
    <AppFuture class="md:col-span-2"> </AppFuture>
  </main>
</template>
