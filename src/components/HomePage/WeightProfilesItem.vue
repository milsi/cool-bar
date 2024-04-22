<script setup lang="ts">
import CardItem from '../CardItem.vue';
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

            <!-- <p class="text-gray-900">Gym+</p> -->

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

            <!-- <p class="text-gray-900">£9.99</p> -->

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
      <!-- <form>
        <div>
          <input type="radio" id="default" name="weight-profile" class="form-radio text-pink-500" />
          <label for="default" class="inline-flex">Default</label>
        </div>
        <div>
          <input type="radio" id="gymplus" name="weight-profile" class="form-radio" />
          <label for="gymplus">Gym+</label>
        </div>
      </form> -->
    </template>
  </CardItem>
</template>
