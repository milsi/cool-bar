<script setup lang="ts">
import CardItem from '../../components/CardItem.vue';
</script>
<template>
  <CardItem>
    <template #heading>Weight profile</template>
    <template #details>
      <fieldset class="space-y-4">
        <legend class="sr-only">Weight profiles</legend>

        <div>
          <label
            for="default"
            class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
          >
            <p class="text-gray-700">Default</p>
            <input
              type="radio"
              name="weight-profile"
              value="Default"
              id="default"
              class="sr-only"
              checked
            />
          </label>
        </div>
        <div>
          <label
            for="gymplus"
            class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
          >
            <p class="text-gray-700">Gym+</p>
            <input
              type="radio"
              name="weight-profile"
              value="gymplus"
              id="gymplus"
              class="sr-only"
            />
          </label>
        </div>
      </fieldset>
    </template>
  </CardItem>
</template>
