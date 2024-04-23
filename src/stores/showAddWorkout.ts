// import the necessary modules
import { defineStore } from 'pinia';

export const useAddWorkoutStore = defineStore({
  id: 'addWorkout',

  state: () => ({
    showAddWorkout: false,
  }),

  getters: {
    state(state) {
      return state.showAddWorkout;
    },
  },

  actions: {
    toggleShowAddWorkout() {
      this.showAddWorkout = !this.showAddWorkout;
    },
  },
});
