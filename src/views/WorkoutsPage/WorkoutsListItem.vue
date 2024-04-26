<script setup lang="ts">
import Workout from './WorkoutItem.vue';
import AddWorkout from './AddWorkoutItem.vue';
import { storeToRefs } from 'pinia';
import { useAppLocalStorageStore } from '@/stores/localStorage';
import { useAddWorkoutStore, useShowEditWorkoutStore } from '@/stores/showModals';
import { watch, ref } from 'vue';
import EditWorkout from './EditWorkoutItem.vue';

const AppLocalStore = useAppLocalStorageStore();
const { appLocalStorage } = storeToRefs(AppLocalStore);
const workouts = appLocalStorage.value.workouts;

const sortedWorkouts = ref(Object.entries(workouts).sort((a, b) => b[0].localeCompare(a[0])));

const ShowAddWorkoutStore = useAddWorkoutStore();
const { showAddWorkout } = storeToRefs(ShowAddWorkoutStore);
const showAddWorkoutModal = ref(false);

watch(showAddWorkout, () => {
  showAddWorkoutModal.value = !showAddWorkoutModal.value;
});

const ShowEditWorkoutStore = useShowEditWorkoutStore();
const { showEditWorkout } = storeToRefs(ShowEditWorkoutStore);
const showEditWorkoutModal = ref(false);

watch(showEditWorkout, (newValue) => {
  showEditWorkoutModal.value = newValue;
});

watch(
  () => appLocalStorage.value.workouts,
  (newWorkouts) => {
    sortedWorkouts.value = Object.entries(newWorkouts).sort((a, b) => b[0].localeCompare(a[0]));
  },
  { deep: true },
);
</script>

<template>
  <AddWorkout v-if="showAddWorkoutModal"></AddWorkout>
  <div
    v-if="workouts"
    class="grid-auto-rows: auto; grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-2"
  >
    <Workout
      v-for="routine in sortedWorkouts"
      :key="routine[0]"
      :dayRoutine="routine[1]"
      :date="routine[0].toString()"
    >
    </Workout>
    <EditWorkout v-if="showEditWorkoutModal"></EditWorkout>
  </div>
</template>
