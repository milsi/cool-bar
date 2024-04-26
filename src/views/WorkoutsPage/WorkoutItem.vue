<script setup lang="ts">
import { ref } from 'vue';
import CardItem from '@/components/CardItem.vue';
import { useShowEditWorkoutStore, useSelectedDateStore } from '@/stores/showModals';
import type { Exercise } from '@/types/Routine';

interface Props {
  dayRoutine: Exercise;
  date: string;
}
const props = defineProps<Props>();

const ShowEditWorkoutStore = useShowEditWorkoutStore();

const toggleShowEditWorkout = () => {
  ShowEditWorkoutStore.toggleShowEditWorkout();
  SelectedDateStore.setDate(selectedDate.value);
};

const SelectedDateStore = useSelectedDateStore();

const selectedDate = ref<string | undefined>(props.date);
</script>
<template>
  <div>
    <CardItem @click="toggleShowEditWorkout" aria-label="workoutItem">
      <template #heading>{{ selectedDate }}</template>
      <template #instructions>Tap to edit per movement</template>
      <template #details>
        <div v-for="(workoutTypes, movement) in props.dayRoutine" :key="movement">
          <h2 class="text-lg">{{ movement }}</h2>
          <div v-for="(workoutType, type) in workoutTypes" :key="type">
            <h3 class="indent-4 text-sm">{{ type }}</h3>
            <div class="overflow-x-auto">
              <table class="table table-xs">
                <!-- head -->
                <thead>
                  <tr>
                    <th>Set</th>
                    <th>Reps</th>
                    <th>Weights</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- row -->
                  <tr v-for="(set, index) in workoutType" :key="index">
                    <th>{{ set.set }}</th>
                    <td>{{ set.reps }}</td>
                    <td>{{ set.weight }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </template>
    </CardItem>
  </div>
</template>
