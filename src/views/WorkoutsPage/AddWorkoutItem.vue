<script setup lang="ts">
import { ref } from 'vue';
import Modal from '../../components/ModalItem.vue';
import IconRemove from '@/assets/icons/IconRemove.vue';

interface Row {
  set: number;
  reps: null | number;
  weight: null | number;
}

const rowsWarmup = ref<Array<Row>>([{ set: 1, reps: null, weight: null }]);
const rowsWorking = ref<Array<Row>>([{ set: 1, reps: null, weight: null }]);

const addRow = (event: Event, type: string) => {
  const rows = type === 'working' ? rowsWorking : rowsWarmup;
  event.preventDefault();
  const setOrder = rows.value[rows.value.length - 1].set + 1;
  rows.value.push({ set: setOrder, reps: null, weight: null });
};

const removeRow = (index: number, type: string) => {
  const rows = type === 'working' ? rowsWorking : rowsWarmup;

  rows.value.splice(index, 1);
  adjustSetNumbers(rows);
};

const adjustSetNumbers = (rows: typeof rowsWarmup | typeof rowsWorking) => {
  for (let i = 0; i < rows.value.length; i++) {
    rows.value[i].set = i + 1;
  }
};
</script>

<template>
  <Modal>
    <template #heading>Add a new workout</template>
    <template #details>
      <form class="m-8 grid grid-cols-3 place-content-center gap-4">
        <select class="select select-bordered col-span-3 w-full max-w-xs">
          <option disabled selected>Movement</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <h3 class="col-span-3">Warmup</h3>
        <div
          v-for="(row, index) in rowsWarmup"
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
            v-if="rowsWarmup.length > 1"
            @click.prevent="removeRow(index, 'warmup')"
            class="btn btn-circle btn-outline btn-error col-span-1"
          >
            <IconRemove />
          </button>
        </div>
        <button @click="(event) => addRow(event, 'warmup')" class="btn btn-primary col-span-3">
          Add warmup row
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
          Add working row
        </button>
      </form>
    </template>
  </Modal>
</template>
