<script setup lang="ts">
import { ref, watchEffect, watch } from 'vue';
import Modal from '../../components/ModalItem.vue';
import IconRemove from '@/assets/icons/IconRemove.vue';
import { useMovementsStore } from '@/stores/movementsStorage';
import { storeToRefs } from 'pinia';
import type { Routine, WorkoutType, Exercise, Workout } from '../../types/Routine';
import { useAppLocalStorageStore } from '@/stores/localStorage';
import { useAddWorkoutStore } from '@/stores/showModals';

const MovementsStore = useMovementsStore();
const { movements } = storeToRefs(MovementsStore);
const selectedMovement = ref<string>('Movement');

const AppLocalStorageStore = useAppLocalStorageStore();

const ShowAddWorkoutStore = useAddWorkoutStore();
const { showAddWorkout } = storeToRefs(ShowAddWorkoutStore);

const date = ref<string>(new Date().toISOString().split('T')[0]);

const deactivateSave = ref<boolean>(false);

const rowsWarmup = ref<Array<Workout>>([{ set: 1, reps: null, weight: null }]);
const rowsWorking = ref<Array<Workout>>([
  { set: rowsWarmup.value[0].set + 1, reps: null, weight: null },
]);

const addRow = (event: Event, type: string) => {
  event.preventDefault();
  let setOrder;
  if (type === 'working') {
    setOrder = rowsWarmup.value.length + rowsWorking.value.length + 1;
    rowsWorking.value.push({ set: setOrder, reps: null, weight: null });
  } else {
    setOrder = rowsWarmup.value.length + 1;
    rowsWarmup.value.push({ set: setOrder, reps: null, weight: null });
  }
  adjustSetNumbers();
};

const removeRow = (index: number, type: string) => {
  const rows = type === 'working' ? rowsWorking : rowsWarmup;

  rows.value.splice(index, 1);
  adjustSetNumbers();
};

const adjustSetNumbers = () => {
  for (let i = 0; i < rowsWarmup.value.length; i++) {
    rowsWarmup.value[i].set = i + 1;
  }
  for (let i = 0; i < rowsWorking.value.length; i++) {
    rowsWorking.value[i].set = rowsWarmup.value.length + i + 1;
  }
};

const routine = ref<Routine>({});

const saveChanges = () => {
  const exercise: Exercise = {};
  const workoutType: WorkoutType = {
    Warmup: rowsWarmup.value.map((row) => ({
      set: row.set,
      reps: row.reps!,
      weight: row.weight!,
    })),
    Working: rowsWorking.value.map((row) => ({
      set: row.set,
      reps: row.reps!,
      weight: row.weight!,
    })),
  };

  exercise[selectedMovement.value] = workoutType;
  routine.value[date.value] = exercise;

  AppLocalStorageStore.addRoutine(date.value, selectedMovement.value, workoutType);
};

const closeModal = () => {
  showAddWorkout.value = false;
};

let errorSelect = true;
let errorWarmup = true;
let errorWorking = true;

const errorActive = () => {
  if (errorSelect || errorWarmup || errorWorking) {
    deactivateSave.value = true;
  } else {
    deactivateSave.value = false;
  }
};

watch(
  () => selectedMovement.value,
  (newValue: string) => {
    if (newValue === 'Movement') {
      errorSelect = true;
    } else {
      errorSelect = false;
    }
    errorActive();
  },
);

watchEffect(() => {
  rowsWarmup.value.forEach((row) => {
    if (row.reps === null || row.reps === 0 || row.weight === null) {
      errorWarmup = true;
    } else {
      errorWarmup = false;
    }
    errorActive();
  });
});

watchEffect(() => {
  rowsWorking.value.forEach((row) => {
    if (row.reps === null || row.reps === 0 || row.weight === null) {
      errorWorking = true;
    } else {
      errorWorking = false;
    }
    errorActive();
  });
});
</script>

<template>
  <Modal
    :deactivateSave="deactivateSave"
    @saveChanges="saveChanges"
    @closeModal="closeModal"
    :showDelete="false"
  >
    <template #heading>Add a new workout</template>
    <template #details>
      <form class="m-8 grid grid-cols-3 place-content-center gap-4">
        <input type="date" class="input input-bordered col-span-3 w-full" v-model="date" />
        <select
          class="select select-bordered col-span-3 w-full"
          v-model="selectedMovement"
          :class="{ 'select-error': selectedMovement === 'Movement' }"
        >
          <option disabled selected>Movement</option>
          <option v-for="movement in movements" :key="movement.movement">
            {{ movement.movement }}
          </option>
        </select>
        <h3 class="col-span-3">Warmup</h3>
        <div
          v-for="(row, index) in rowsWarmup"
          :key="index"
          class="col-span-3 grid grid-cols-7 place-content-center gap-1"
        >
          <input
            type="number"
            v-model="row.set"
            placeholder="Set"
            class="input input-bordered col-span-2 w-full"
            readonly
          />
          <input
            type="number"
            min="1"
            v-model="row.reps"
            placeholder="Reps"
            class="input input-bordered col-span-2 w-full"
            :class="{ 'input-error': row.reps === null || row.reps === 0 }"
          />
          <input
            type="number"
            min="0"
            v-model="row.weight"
            placeholder="Weight"
            class="input input-bordered col-span-2 w-full max-w-xs"
            :class="{ 'input-error': row.weight === null }"
          />
          <button
            v-if="rowsWarmup.length > 1"
            @click.prevent="removeRow(index, 'warmup')"
            class="btn btn-circle btn-outline btn-error col-span-1"
          >
            <IconRemove />
          </button>
        </div>
        <button @click="(event) => addRow(event, 'warmup')" class="btn btn-primary col-span-3">
          Add warmup set
        </button>
        <h3 class="col-span-3">Working</h3>
        <div
          v-for="(row, index) in rowsWorking"
          :key="index"
          class="col-span-3 grid grid-cols-7 place-content-center gap-1"
        >
          <input
            type="number"
            min="1"
            v-model="row.set"
            placeholder="Set"
            class="input input-bordered col-span-2 w-full max-w-xs"
            readonly
          />
          <input
            type="number"
            min="1"
            v-model="row.reps"
            placeholder="Reps"
            class="input input-bordered col-span-2 w-full max-w-xs"
            :class="{ 'input-error': row.reps === null || row.reps === 0 }"
          />
          <input
            type="number"
            min="0"
            v-model="row.weight"
            placeholder="Weight"
            class="input input-bordered col-span-2 w-full max-w-xs"
            :class="{ 'input-error': row.weight === null }"
          />
          <button
            v-if="rowsWorking.length > 1"
            @click.prevent="removeRow(index, 'working')"
            class="btn btn-circle btn-outline btn-error col-span-1"
          >
            <IconRemove />
          </button>
        </div>
        <button @click="(event) => addRow(event, 'working')" class="btn btn-primary col-span-3">
          Add working set
        </button>
      </form>
    </template>
  </Modal>
</template>
