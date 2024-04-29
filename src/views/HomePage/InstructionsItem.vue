<script setup lang="ts">
import CardItem from '@/components/CardItem.vue';
</script>
<template>
  <CardItem>
    <template #heading> welcome. </template>
    <template #instructions></template>
    <template #details>
      <div class="overflow-x-auto">
        <ul class="steps steps-vertical">
          <li data-content="●" class="step step-secondary">navigate to workouts.</li>
          <li data-content="●" class="step step-secondary">click on plus</li>
          <li data-content="●" class="step step-secondary">select date and movement</li>
          <li data-content="●" class="step step-secondary">fill reps and weights</li>
          <li data-content="●" class="step step-secondary">save</li>
        </ul>
      </div>
    </template>
  </CardItem>
</template>
