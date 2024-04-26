<script setup lang="ts">
import { ref, watchEffect, watch, computed } from 'vue';
import Modal from '../../components/ModalItem.vue';
import IconRemove from '@/assets/icons/IconRemove.vue';
import { storeToRefs } from 'pinia';
import type { Routine, WorkoutType, Row } from '../../types/Routine';
import { useAppLocalStorageStore } from '@/stores/localStorage';
import { useShowEditWorkoutStore, useSelectedDateStore } from '@/stores/showModals';

const today = ref<string>(new Date().toISOString().split('T')[0]);

const AppLocalStorageStore = useAppLocalStorageStore();
const { appLocalStorage } = storeToRefs(AppLocalStorageStore);
const workouts: Routine = appLocalStorage.value.workouts;

const ShowEditWorkoutStore = useShowEditWorkoutStore();
const { showEditWorkout } = storeToRefs(ShowEditWorkoutStore);

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

watch(selectedMovement, (newMovement) => {
  selectedWorkout.value = workouts[selectedDateWrite.value][newMovement];
  rowsWarmup.value = JSON.parse(JSON.stringify(selectedWorkout.value.Warmup));
  rowsWorking.value = JSON.parse(JSON.stringify(selectedWorkout.value.Working));
});

const addRow = (event: Event, type: string) => {
  event.preventDefault();
  const rows = type === 'working' ? rowsWorking : rowsWarmup;
  rows.value.push({ set: 0, reps: null, weight: null });
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

const saveChanges = () => {
  let newWorkout: WorkoutType = { Warmup: [], Working: [] };
  newWorkout.Warmup = rowsWarmup.value;
  newWorkout.Working = rowsWorking.value;
  AppLocalStorageStore.updateRoutine(selectedDateWrite.value, selectedMovement.value, newWorkout);
};

const closeModal = () => {
  showEditWorkout.value = false;
};

const deleteMovement = () => {
  AppLocalStorageStore.deleteMovement(selectedDateWrite.value, selectedMovement.value);
  closeModal();
};

const errorSelect = ref(false);
const errorWarmup = ref(false);
const errorWorking = ref(false);

watch(
  () => selectedMovement.value,
  (newValue: string) => {
    errorSelect.value = newValue === 'Movement';
  },
);

watchEffect(() => {
  [rowsWarmup, rowsWorking].forEach((rows) => {
    rows.value.forEach((row: Row) => {
      if (row.reps === null || row.reps === 0 || row.weight === null) {
        rows.value === rowsWarmup.value ? (errorWarmup.value = true) : (errorWorking.value = true);
      } else {
        rows.value === rowsWarmup.value
          ? (errorWarmup.value = false)
          : (errorWorking.value = false);
      }
    });
  });
});

const deactivateSave = computed(() => errorSelect.value || errorWarmup.value || errorWorking.value);
</script>

<template>
  <Modal
    :deactivateSave="deactivateSave"
    @saveChanges="saveChanges"
    @closeModal="closeModal"
    @deleteMovement="deleteMovement"
    :showDelete="true"
  >
    <template #heading>Add a new workout</template>
    <template #details>
      <form class="m-8 grid grid-cols-3 place-content-center gap-4">
        <input
          type="date"
          class="input input-bordered col-span-3 w-full"
          v-model="selectedDateWrite"
          readonly
        />
        <select
          class="select select-bordered col-span-3 w-full"
          v-model="selectedMovement"
          :class="{ 'select-error': selectedMovement === 'Movement' }"
        >
          <option disabled selected>Movement</option>
          <option v-for="movement in movements" :key="movement">
            {{ movement }}
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
