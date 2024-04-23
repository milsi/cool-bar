<script setup lang="ts">
import Workout from './WorkoutItem.vue';
import { storeToRefs } from 'pinia';
import { useAppLocalStorageStore } from '@/stores/localStorage';
import { ref } from 'vue';

const AppLocalStore = useAppLocalStorageStore();
const { appLocalStorage } = storeToRefs(AppLocalStore);
const workouts = appLocalStorage.value.workouts;

console.log(workouts);

// Get today's date
let today: string = new Date().toISOString().split('T')[0];
</script>

<template>
  <div class="grid grid-cols-1 gap-x-3 md:grid-cols-2">
    <Workout
      v-for="(exercise, day) in workouts"
      :key="day"
      :class="{ 'bg-base-300': day === today }"
    >
      <template #date>{{ day }}</template>
      <template #movements>
        <div v-for="(workoutTypes, movement) in exercise" :key="movement">
          <h1>{{ movement }}</h1>
          <div v-for="(workoutType, type) in workoutTypes" :key="type">
            <h4>{{ type }}</h4>
            <div class="overflow-x-auto">
              <table class="table table-xs">
                <!-- head -->
                <thead>
                  <tr>
                    <th>Set</th>
                    <th>Reps</th>
                    <th>Weights</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- row -->
                  <tr v-for="(set, index) in workoutType" :key="index">
                    <th>{{ set.set }}</th>
                    <td>{{ set.reps }}</td>
                    <td>{{ set.weight }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </template>
    </Workout>
  </div>
</template>
<style scoped>
.today-focus {
  background-color: oklch(var(--p));
}
</style>
