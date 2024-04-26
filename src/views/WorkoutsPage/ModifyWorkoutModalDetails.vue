<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';
import type { Exercise, Routine, Row, WorkoutType } from '../../types/Routine';
import { useAppLocalStorageStore } from '@/stores/localStorage';
import { useShowEditWorkoutStore } from '@/stores/showModals';
import { storeToRefs } from 'pinia';
import Modal from '../../components/ModalItem.vue';
import IconRemove from '@/assets/icons/IconRemove.vue';

interface Props {
  action: String;
  dateModel: String;
  isReadOnly: boolean;
  movements: String[];
  warmupRows: Row[];
  workingRows: Row[];
}

const props = defineProps<Props>();

const date = ref<String>(
  props.dateModel ? props.dateModel : new Date().toISOString().split('T')[0],
);

const rowsWarmupWrite = ref<Array<Row>>(props.warmupRows);
const rowsWorkingWrite = ref<Array<Row>>(props.workingRows);

const selectedMovement = ref<String>('Movement');

const AppLocalStorageStore = useAppLocalStorageStore();

const ShowEditWorkoutStore = useShowEditWorkoutStore();
const { showEditWorkout } = storeToRefs(ShowEditWorkoutStore);

const addRow = (event: Event, type: string) => {
  event.preventDefault();
  const rows = type === 'working' ? rowsWorkingWrite : rowsWarmupWrite;
  rows.value.push({ set: 0, reps: null, weight: null });
  adjustSetNumbers();
};

const removeRow = (index: number, type: string) => {
  const rows = type === 'working' ? rowsWorkingWrite : rowsWarmupWrite;
  rows.value.splice(index, 1);
  adjustSetNumbers();
};

const adjustSetNumbers = () => {
  for (let i = 0; i < rowsWarmupWrite.value.length; i++) {
    rowsWarmupWrite.value[i].set = i + 1;
  }
  for (let i = 0; i < rowsWorkingWrite.value.length; i++) {
    rowsWorkingWrite.value[i].set = rowsWarmupWrite.value.length + i + 1;
  }
};

const saveChanges = () => {
  const routine = ref<Routine>({});
  const workoutType: WorkoutType = {
    Warmup: rowsWarmupWrite.value.map((row) => ({
      set: row.set,
      reps: row.reps!,
      weight: row.weight!,
    })),
    Working: rowsWorkingWrite.value.map((row) => ({
      set: row.set,
      reps: row.reps!,
      weight: row.weight!,
    })),
  };

  if (props.action === 'edit') {
    AppLocalStorageStore.updateRoutine(
      date.value.toString(),
      selectedMovement.value.toString(),
      workoutType,
    );
  } else {
    const exercise: Exercise = {};
    exercise[selectedMovement.value.toString()] = workoutType;
    routine.value[date.value.toString()] = exercise;
    AppLocalStorageStore.addRoutine(
      date.value.toString(),
      selectedMovement.value.toString(),
      workoutType,
    );
  }
};

const closeModal = () => {
  showEditWorkout.value = false;
};

const deleteMovement = () => {
  AppLocalStorageStore.deleteMovement(date.value.toString(), selectedMovement.value.toString());
  closeModal();
};

const errorSelect = ref(false);
const errorWarmup = ref(false);
const errorWorking = ref(false);

watch(
  () => selectedMovement.value,
  (newValue: String) => {
    errorSelect.value = newValue === 'Movement';
  },
);
watchEffect(() => {
  [rowsWarmupWrite, rowsWorkingWrite].forEach((rows) => {
    rows.value.forEach((row: Row) => {
      if (row.reps === null || row.reps === 0 || row.weight === null) {
        rows.value === rowsWarmupWrite.value
          ? (errorWarmup.value = true)
          : (errorWorking.value = true);
      } else {
        rows.value === rowsWarmupWrite.value
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
    :showDelete="action === 'edit'"
  >
    <template #heading>{{ action }}</template>
    <template #details>
      <form class="m-8 grid grid-cols-3 place-content-center gap-4">
        <input
          type="date"
          class="input input-bordered col-span-3 w-full"
          v-model="date"
          :readonly="isReadOnly"
        />
        <select
          class="select select-bordered col-span-3 w-full"
          v-model="selectedMovement"
          :class="{ 'select-error': selectedMovement === 'Movement' }"
        >
          <option disabled selected>Movement</option>
          <option v-for="movement in movements" :key="movement.toString()">
            {{ movement }}
          </option>
        </select>
        <h3 class="col-span-3">Warmup</h3>
        <div
          v-for="(row, index) in rowsWarmupWrite"
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
            v-if="rowsWarmupWrite.length > 1"
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
          v-for="(row, index) in rowsWorkingWrite"
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
            v-if="rowsWorkingWrite.length > 1"
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
