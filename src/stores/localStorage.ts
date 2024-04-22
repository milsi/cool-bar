import { defineStore } from 'pinia';
import type { LocalStorage } from '@/types/LocalStorage';
import type { User } from '@/types/User';
import type { WorkoutSet } from '@/types/WorkoutSet';
import type { Workout } from '@/types/Workout';

const STORE_NAME = 'cool-bar';
const todayISO = new Date().toISOString().slice(0, 10);
const PLACEHOLDER_USER_INFO: User = {
  name: 'Jane',
  age: 30,
  sex: 'F',
  bodyWeight: 70,
};
const PLACEHOLDER_WORKOUT_SET: WorkoutSet = {
  movement: {
    movement: 'Bench Press',
    url: '',
  },
  set: 1,
  reps: 5,
  weight: 20,
};
const PLACEHOLDER_WORKOUT: Workout = [PLACEHOLDER_WORKOUT_SET];

const EMPTY_LOCAL_STORAGE: LocalStorage = {
  userProfile: PLACEHOLDER_USER_INFO,
  workouts: {
    [todayISO]: [PLACEHOLDER_WORKOUT],
  },
};

const getAppLocalStorage = () => {
  const appLocalStorage = localStorage.getItem(STORE_NAME);

  return appLocalStorage ? JSON.parse(appLocalStorage) : EMPTY_LOCAL_STORAGE;
};

export const useAppLocalStorageStore = defineStore(STORE_NAME, {
  state: () => ({
    appLocalStorage: getAppLocalStorage(),
  }),
  getters: {
    userInfo(state) {
      return state.appLocalStorage.userProfile;
    },
    workouts(state) {
      return state.appLocalStorage.workouts;
    },
  },
  actions: {
    updateLocalStorage(newLocalStorage: LocalStorage) {
      this.appLocalStorage = newLocalStorage;
      localStorage.setItem(STORE_NAME, JSON.stringify(this.appLocalStorage));
    },
    updateUserProfile(newUserProfile: User) {
      this.appLocalStorage.userProfile = newUserProfile;
      localStorage.setItem(STORE_NAME, JSON.stringify(this.appLocalStorage));
    },
  },
});
