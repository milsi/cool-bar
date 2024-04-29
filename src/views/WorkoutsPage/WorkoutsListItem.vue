<script setup lang="ts">
import Workout from './WorkoutItem.vue';
import AddWorkout from './AddWorkoutItem.vue';
import { storeToRefs } from 'pinia';
import { useAppLocalStorageStore } from '@/stores/localStorage';
import { useAddWorkoutStore, useShowEditWorkoutStore } from '@/stores/showModals';
import { watch, ref, computed, reactive } from 'vue';
import EditWorkout from './EditWorkoutItem.vue';
import type { Exercise, Routine } from '@/types/Routine';
import NoWorkouts from './NoWorkoutsItem.vue';

const AppLocalStore = useAppLocalStorageStore();
const { appLocalStorage } = storeToRefs(AppLocalStore);
const workouts: Routine = appLocalStorage.value.workouts;
const sortedWorkouts = ref<[string, Exercise][]>(
  Object.entries(workouts).sort((a, b) => b[0].localeCompare(a[0])),
);

const ShowAddWorkoutStore = useAddWorkoutStore();
const { showAddWorkout } = storeToRefs(ShowAddWorkoutStore);
const showAddWorkoutModal = ref(false);

const toggleShowAddNew = () => {
  showAddWorkout.value = true;
};

watch(
  showAddWorkout,
  () => {
    showAddWorkoutModal.value = !showAddWorkoutModal.value;
  },
  { deep: true },
);

const ShowEditWorkoutStore = useShowEditWorkoutStore();
const { showEditWorkout } = storeToRefs(ShowEditWorkoutStore);
const showEditWorkoutModal = ref(false);

watch(
  showEditWorkout,
  (newValue) => {
    showEditWorkoutModal.value = newValue;
  },
  { deep: true },
);

watch(
  () => appLocalStorage.value.workouts,
  (newWorkouts: Routine) => {
    sortedWorkouts.value = Object.entries(newWorkouts).sort((a, b) => b[0].localeCompare(a[0]));
  },
  { deep: true },
);

const state = reactive({
  currentPage: 1,
  itemsPerPage: 6,
});

const paginatedWorkouts = computed(() => {
  const start = (state.currentPage - 1) * state.itemsPerPage;
  const end = start + state.itemsPerPage;
  return sortedWorkouts.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(sortedWorkouts.value.length / state.itemsPerPage));

const changePage = (page: number) => {
  state.currentPage = page;
};
</script>

<template>
  <div
    v-if="Object.keys(workouts).length > 0"
    class="grid-auto-rows grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-2 lg:grid-cols-3"
  >
    <Workout
      v-for="routine in paginatedWorkouts"
      :key="routine[0]"
      :dayRoutine="routine[1]"
      :date="routine[0].toString()"
    >
    </Workout>
    <EditWorkout v-if="showEditWorkoutModal"></EditWorkout>
  </div>
  <NoWorkouts v-else @toggleShowAddNew="toggleShowAddNew"></NoWorkouts>
  <AddWorkout v-if="showAddWorkoutModal"></AddWorkout>
  <!-- Pagination controls -->
  <div class="join mx-auto mt-8 grid w-1/2 grid-cols-2" v-if="totalPages > 1">
    <button
      class="btn btn-outline join-item hover:bg-secondary"
      :disabled="state.currentPage === 1"
      @click="changePage(state.currentPage - 1)"
    >
      Previous page
    </button>
    <button
      class="btn btn-outline join-item hover:bg-secondary"
      :disabled="state.currentPage === totalPages"
      @click="changePage(state.currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>
