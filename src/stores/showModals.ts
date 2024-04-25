// import the necessary modules
import { defineStore } from 'pinia';

export const useShowModalStore = defineStore({
  id: 'showModal',
  state: () => ({
    showModal: false,
  }),
  getters: {
    state(state) {
      return state.showModal;
    },
  },
  actions: {
    toggleShowModal() {
      this.showModal = !this.showModal;
    },
  },
});

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
