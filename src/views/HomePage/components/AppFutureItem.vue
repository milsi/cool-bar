<script setup lang="ts">
import CardItem from '@/components/CardItem.vue';
</script>
<template>
  <CardItem>
    <template #heading>future.</template>
    <template #details>
      <div class="overflow-x-auto">
        <ul class="steps steps-vertical md:steps-horizontal">
          <li data-content="●" class="step step-primary">stats.</li>
          <li data-content="●" class="step step-primary">automatic sets suggestions.</li>
          <li data-content="●" class="step step-primary">gym profiles.</li>
          <li data-content="●" class="step step-primary">workout csv import/export.</li>
          <li data-content="●" class="step step-primary">more body measurements input.</li>
        </ul>
      </div>
    </template>
  </CardItem>
</template>
