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

export const useShowEditWorkoutStore = defineStore({
  id: 'editWorkout',
  state: () => ({
    showEditWorkout: false,
  }),
  getters: {
    state(state) {
      return state.showEditWorkout;
    },
  },
  actions: {
    toggleShowEditWorkout() {
      this.showEditWorkout = !this.showEditWorkout;
    },
  },
});

export const useShowEditUserProfileStore = defineStore({
  id: 'editUserProfile',
  state: () => ({
    showEditUserProfile: false,
  }),
  getters: {
    state(state) {
      return state.showEditUserProfile;
    },
  },
  actions: {
    toggleShowEditUserProfile() {
      this.showEditUserProfile = !this.showEditUserProfile;
    },
  },
});

export const useSelectedDateStore = defineStore({
  id: 'selectedDate',
  state: () => ({
    selectedDate: <string | undefined>'',
  }),
  actions: {
    setDate(newDate: string | undefined) {
      this.selectedDate = newDate;
    },
  },
});
