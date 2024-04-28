<script setup lang="ts">
import { ref } from 'vue';
import ModifyWorkoutModalDetails from './ModifyWorkoutModalDetails.vue';
import { useMovementsStore } from '@/stores/movementsStorage';
import { storeToRefs } from 'pinia';
import type { Set } from '@/types/Routine';

const MovementsStore = useMovementsStore();
const { movements } = storeToRefs(MovementsStore);
const movementsArray = movements.value.map((move) => move.movement);

const date = ref<string>(new Date().toISOString().split('T')[0]);

const setsWarmup = ref<Array<Set>>([{ set: 1, reps: null, weight: null }]);
const setsWorking = ref<Array<Set>>([
  { set: setsWarmup.value[0].set + 1, reps: null, weight: null },
]);
</script>

<template>
  <ModifyWorkoutModalDetails
    :action="'create'"
    :dateModel="date"
    :isReadOnly="false"
    :movements="movementsArray"
    :selectedMovement="''"
    :warmupSets="setsWarmup"
    :workingSets="setsWorking"
  ></ModifyWorkoutModalDetails>
</template>
