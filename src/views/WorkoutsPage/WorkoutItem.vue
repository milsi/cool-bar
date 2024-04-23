<script setup lang="ts">
import CardItem from '../../components/CardItem.vue';
</script>
<template>
  <CardItem>
    <template #heading><slot name="date"></slot></template>
    <template #details>
      <slot name="movements"></slot>
    </template>
  </CardItem>
</template>
