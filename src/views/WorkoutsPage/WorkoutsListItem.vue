<script setup lang="ts">
import Workout from './WorkoutItem.vue';
import AddWorkout from './AddWorkoutItem.vue';
import { storeToRefs } from 'pinia';
import { useAppLocalStorageStore } from '@/stores/localStorage';
import { useAddWorkoutStore } from '@/stores/showAddWorkout';
import { watch, ref } from 'vue';

const AppLocalStore = useAppLocalStorageStore();
const { appLocalStorage } = storeToRefs(AppLocalStore);
const workouts = appLocalStorage.value.workouts;

const ShowAddWorkoutStore = useAddWorkoutStore();
const { showAddWorkout } = storeToRefs(ShowAddWorkoutStore);
const showAddWorkoutModal = ref(false);

watch(showAddWorkout, () => {
  showAddWorkoutModal.value = !showAddWorkoutModal.value;
});
</script>

<template>
  <AddWorkout v-if="showAddWorkoutModal"></AddWorkout>
  <div class="grid grid-cols-1 gap-x-3 md:grid-cols-2">
    <Workout v-for="(exercise, day) in workouts" :key="day">
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
