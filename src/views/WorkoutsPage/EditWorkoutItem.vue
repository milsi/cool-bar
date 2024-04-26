<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import type { Routine, WorkoutType } from '../../types/Routine';
import { useAppLocalStorageStore } from '@/stores/localStorage';
import { useSelectedDateStore } from '@/stores/showModals';
import ModifyWorkoutModalDetails from './ModifyWorkoutModalDetails.vue';

const today = ref<string>(new Date().toISOString().split('T')[0]);

const AppLocalStorageStore = useAppLocalStorageStore();
const { appLocalStorage } = storeToRefs(AppLocalStorageStore);
const workouts: Routine = appLocalStorage.value.workouts;

const SelectedDateStore = useSelectedDateStore();
const { selectedDate } = storeToRefs(SelectedDateStore);

const selectedDateWrite = ref<string>(selectedDate.value ? selectedDate.value : today.value);

watch(selectedDate, (newValue) => {
  selectedDateWrite.value = String(newValue);
});

const selectedMovement = ref<string>('Movements');

const movements = ref(Object.keys(workouts[selectedDateWrite.value]));
const firstAvailableMovement = movements.value[0];

if (selectedMovement.value === 'Movements') {
  selectedMovement.value = firstAvailableMovement;
}

let selectedWorkout = ref<WorkoutType>({ Warmup: [], Working: [] });

if (selectedDateWrite.value !== undefined && selectedMovement.value !== undefined) {
  selectedWorkout = ref<WorkoutType>(workouts[selectedDateWrite.value][selectedMovement.value]);
}

const rowsWarmup = ref(JSON.parse(JSON.stringify(selectedWorkout.value.Warmup)));
const rowsWorking = ref(JSON.parse(JSON.stringify(selectedWorkout.value.Working)));
</script>

<template>
  <ModifyWorkoutModalDetails
    :action="'edit'"
    :dateModel="selectedDateWrite"
    :isReadOnly="true"
    :movements="movements"
    :selectedMovement="selectedMovement"
    :warmupRows="rowsWarmup"
    :workingRows="rowsWorking"
  ></ModifyWorkoutModalDetails>
</template>
