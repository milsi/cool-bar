<script setup lang="ts">
import { ref } from 'vue';
import Modal from '../../components/ModalItem.vue';
import IconRemove from '@/assets/icons/IconRemove.vue';
import { useMovementsStore } from '../../stores/movementsStorage';
import { storeToRefs } from 'pinia';

const MovementsStore = useMovementsStore();
const { movements } = storeToRefs(MovementsStore);

const date = ref<string>(new Date().toISOString().split('T')[0]);

interface Row {
  set: number;
  reps: null | number;
  weight: null | number;
}

const rowsWarmup = ref<Array<Row>>([{ set: 1, reps: null, weight: null }]);
const rowsWorking = ref<Array<Row>>([
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
</script>

<template>
  <Modal>
    <template #heading>Add a new workout</template>
    <template #details>
      <form class="m-8 grid grid-cols-3 place-content-center gap-4">
        <input type="date" class="input input-bordered col-span-3 w-full max-w-xs" v-model="date" />
        <select class="select select-bordered col-span-3 w-full max-w-xs">
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
            type="text"
            v-model="row.set"
            placeholder="Set"
            class="input input-bordered col-span-2 w-full max-w-xs"
            readonly
          />
          <input
            type="text"
            v-model="row.reps"
            placeholder="Reps"
            class="input input-bordered col-span-2 w-full max-w-xs"
          />
          <input
            type="text"
            v-model="row.weight"
            placeholder="Weight"
            class="input input-bordered col-span-2 w-full max-w-xs"
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
          class="col-span-3 grid grid-cols-6 place-content-center gap-1"
        >
          <input
            type="text"
            v-model="row.set"
            placeholder="Set"
            class="input input-bordered col-span-1 w-full max-w-xs"
            readonly
          />
          <input
            type="text"
            v-model="row.reps"
            placeholder="Reps"
            class="input input-bordered col-span-2 w-full max-w-xs"
          />
          <input
            type="text"
            v-model="row.weight"
            placeholder="Weight"
            class="input input-bordered col-span-2 w-full max-w-xs"
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
