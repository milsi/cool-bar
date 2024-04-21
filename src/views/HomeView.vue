<script setup lang="ts">
import CardItem from '../components/CardItem.vue';
</script>

<template>
  <main>
    <CardItem>
      <template #heading> User information (tap to edit)</template>
      <template #details>
        <h3>Name</h3>
        <h3>Age</h3>
        <h3>Sex</h3>
        <h3>Body weight</h3>
      </template>
    </CardItem>
    <CardItem>
      <template #heading>Default weights</template>
      <template #details>
        <form>
          <input type="radio" id="default" name="weight-profile" />
          <label for="default">Default</label>
          <input type="radio" id="gymplus" name="weight-profile" />
          <label for="gymplus">Gym+</label>
        </form>
      </template>
    </CardItem>
  </main>
</template>
