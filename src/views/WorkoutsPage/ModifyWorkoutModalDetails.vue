<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';
import type { Exercise, Routine, Set, WorkoutType } from '@/types/Routine';
import { useAppLocalStorageStore } from '@/stores/localStorage';
import { useShowEditWorkoutStore, useAddWorkoutStore } from '@/stores/showModals';

import { storeToRefs } from 'pinia';
import Modal from '@/components/ModalItem.vue';
import IconRemove from '@/assets/icons/IconRemove.vue';

interface Props {
  action: String;
  dateModel: String;
  isReadOnly: boolean;
  movements: String[];
  selectedMovement: String;
  warmupSets: Set[];
  workingSets: Set[];
}

const props = defineProps<Props>();

const date = ref<String>(
  props.dateModel ? props.dateModel : new Date().toISOString().split('T')[0],
);

const setsWarmupWrite = ref<Array<Set>>(props.warmupSets);
const setsWorkingWrite = ref<Array<Set>>(props.workingSets);

const selectedMovement = ref<String>(props.selectedMovement ? props.selectedMovement : 'Movement');

const AppLocalStorageStore = useAppLocalStorageStore();
const { appLocalStorage } = storeToRefs(AppLocalStorageStore);
const workouts: Routine = appLocalStorage.value.workouts;

const ShowEditWorkoutStore = useShowEditWorkoutStore();
const { showEditWorkout } = storeToRefs(ShowEditWorkoutStore);

const ShowAddWorkoutStore = useAddWorkoutStore();
const { showAddWorkout } = storeToRefs(ShowAddWorkoutStore);

const addSet = (event: Event, type: string) => {
  event.preventDefault();
  const sets = type === 'working' ? setsWorkingWrite : setsWarmupWrite;
  sets.value.push({ set: 0, reps: null, weight: null });
  adjustSetNumbers();
};

const removeSet = (index: number, type: string) => {
  const sets = type === 'working' ? setsWorkingWrite : setsWarmupWrite;
  sets.value.splice(index, 1);
  adjustSetNumbers();
};

const adjustSetNumbers = () => {
  for (let i = 0; i < setsWarmupWrite.value.length; i++) {
    setsWarmupWrite.value[i].set = i + 1;
  }
  for (let i = 0; i < setsWorkingWrite.value.length; i++) {
    setsWorkingWrite.value[i].set = setsWarmupWrite.value.length + i + 1;
  }
};

const saveChanges = () => {
  const routine = ref<Routine>({});
  const workoutType: WorkoutType = {
    Warmup: setsWarmupWrite.value.map((set) => ({
      set: set.set,
      reps: set.reps!,
      weight: set.weight!,
    })),
    Working: setsWorkingWrite.value.map((set) => ({
      set: set.set,
      reps: set.reps!,
      weight: set.weight!,
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
  if (props.action === 'edit') {
    showEditWorkout.value = false;
  } else {
    showAddWorkout.value = false;
  }
};

const deleteMovement = () => {
  AppLocalStorageStore.deleteMovement(date.value.toString(), selectedMovement.value.toString());
  closeModal();
};

let selectedWorkout = ref<WorkoutType>({ Warmup: [], Working: [] });

watch(selectedMovement, (newMovement) => {
  if (props.action === 'edit') {
    selectedWorkout.value = workouts[date.value.toString()][newMovement.toString()];
    setsWarmupWrite.value = JSON.parse(JSON.stringify(selectedWorkout.value.Warmup));
    setsWorkingWrite.value = JSON.parse(JSON.stringify(selectedWorkout.value.Working));
  }
});

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
  [setsWarmupWrite, setsWorkingWrite].forEach((sets) => {
    sets.value.forEach((set: Set) => {
      if (set.reps === null || set.reps === 0 || set.weight === null || !set.reps || !set.weight) {
        sets.value === setsWarmupWrite.value
          ? (errorWarmup.value = true)
          : (errorWorking.value = true);
      } else {
        sets.value === setsWarmupWrite.value
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
    <template #heading>{{ action === 'edit' ? 'Modify the' : 'Create a' }} workout</template>
    <template #details>
      <form class="m-8 grid grid-cols-3 place-content-center gap-4">
        <input
          type="date"
          class="input input-bordered col-span-3 w-full"
          v-model="date"
          :readonly="isReadOnly"
          aria-label="date"
        />
        <select
          class="select select-bordered col-span-3 w-full"
          v-model="selectedMovement"
          :class="{ 'select-error': selectedMovement === 'Movement' }"
          aria-label="movement"
        >
          <option disabled selected>Movement</option>
          <option v-for="movement in movements" :key="movement.toString()">
            {{ movement }}
          </option>
        </select>
        <h3 class="col-span-3">Warmup</h3>
        <div
          v-for="(set, index) in setsWarmupWrite"
          :key="index"
          class="col-span-3 grid grid-cols-7 place-content-center gap-1"
        >
          <input
            type="number"
            step="1"
            pattern="[0-9]*"
            v-model="set.set"
            placeholder="Set"
            class="input input-bordered col-span-2 w-full"
            readonly
          />
          <input
            type="number"
            min="1"
            step="1"
            pattern="[0-9]*"
            v-model="set.reps"
            placeholder="Reps"
            class="input input-bordered col-span-2 w-full"
            :class="{ 'input-error': set.reps === null || set.reps === 0 || !set.reps }"
          />
          <input
            type="number"
            min="0"
            pattern="[0-9]*"
            v-model="set.weight"
            placeholder="Weight"
            class="input input-bordered col-span-2 w-full max-w-xs"
            :class="{ 'input-error': set.weight === null || !set.weight }"
          />
          <button
            v-if="setsWarmupWrite.length > 1"
            @click.prevent="removeSet(index, 'warmup')"
            class="btn btn-circle btn-outline btn-error col-span-1"
          >
            <IconRemove />
          </button>
        </div>
        <button @click="(event) => addSet(event, 'warmup')" class="btn btn-primary col-span-3">
          Add warmup set
        </button>
        <h3 class="col-span-3">Working</h3>
        <div
          v-for="(set, index) in setsWorkingWrite"
          :key="index"
          class="col-span-3 grid grid-cols-7 place-content-center gap-1"
        >
          <input
            type="number"
            min="1"
            step="1"
            pattern="[0-9]*"
            v-model="set.set"
            placeholder="Set"
            class="input input-bordered col-span-2 w-full max-w-xs"
            readonly
          />
          <input
            type="number"
            min="1"
            pattern="[0-9]*"
            v-model="set.reps"
            placeholder="Reps"
            class="input input-bordered col-span-2 w-full max-w-xs"
            :class="{ 'input-error': set.reps === null || set.reps === 0 || !set.reps }"
          />
          <input
            type="number"
            min="0"
            pattern="[0-9]*"
            v-model="set.weight"
            placeholder="Weight"
            class="input input-bordered col-span-2 w-full max-w-xs"
            :class="{ 'input-error': set.weight === null || !set.weight }"
          />
          <button
            v-if="setsWorkingWrite.length > 1"
            @click.prevent="removeSet(index, 'working')"
            class="btn btn-circle btn-outline btn-error col-span-1"
          >
            <IconRemove />
          </button>
        </div>
        <button @click="(event) => addSet(event, 'working')" class="btn btn-primary col-span-3">
          Add working set
        </button>
      </form>
    </template>
  </Modal>
</template>
