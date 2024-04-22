<script setup lang="ts">
import CardItem from '../CardItem.vue';
</script>
<template>
  <CardItem>
    <template #heading>Default weights</template>
    <template #details>
      <form>
        <div>
          <input type="radio" id="default" name="weight-profile" class="form-radio text-pink-500" />
          <label for="default" class="inline-flex">Default</label>
        </div>
        <div>
          <input type="radio" id="gymplus" name="weight-profile" class="form-radio" />
          <label for="gymplus">Gym+</label>
        </div>
      </form>
    </template>
  </CardItem>
</template>
