<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import IconAdd from '@/assets/icons/IconAdd.vue';
import { useAddWorkoutStore } from '@/stores/showModals';

const route = useRoute();
const isWorkoutPage = computed(() => route.path === '/workouts');

const addWorkoutStore = useAddWorkoutStore();
</script>

<template>
  <header>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div
            aria-label="menu"
            tabindex="0"
            role="button"
            class="btn btn-circle btn-ghost hover:bg-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/workouts">Workouts</RouterLink></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl hover:bg-primary" href="/" label="appName">cool bar.</a>
      </div>
      <div class="navbar-end">
        <button
          @click="addWorkoutStore.toggleShowAddWorkout"
          class="btn btn-circle btn-primary"
          v-if="isWorkoutPage"
          aria-label="addWorkout"
        >
          <IconAdd />
        </button>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
main {
  margin: 0 auto;
}
</style>
@/stores/showModals
