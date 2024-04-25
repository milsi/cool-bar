import { defineStore } from 'pinia';
import type { LocalStorage } from '@/types/LocalStorage';
import type { User } from '@/types/User';
import type { WorkoutType, Workout, Exercise } from '@/types/Routine';

const STORE_NAME = 'cool-bar';
const today = new Date();
const todayISO = new Date().toISOString().slice(0, 10);
today.setDate(today.getDate() - 1);
const yesterdayISO = today.toISOString().slice(0, 10);
const PLACEHOLDER_USER_INFO: User = {
  name: 'Jane',
  age: 30,
  sex: 'F',
  bodyWeight: 70,
};

const PLACEHOLDER_WORKOUT_SET_2: Workout = {
  set: 3,
  reps: 5,
  weight: 22.5,
};

const PLACEHOLDER_WORKOUT: WorkoutType = {
  Warmup: [
    {
      set: 1,
      reps: 5,
      weight: 20,
    },
    {
      set: 2,
      reps: 5,
      weight: 20,
    },
  ],
  Working: [PLACEHOLDER_WORKOUT_SET_2],
};

const EMPTY_LOCAL_STORAGE: LocalStorage = {
  userProfile: PLACEHOLDER_USER_INFO,
  workouts: {
    [todayISO]: {
      'Bench Press': PLACEHOLDER_WORKOUT,
    },
    [yesterdayISO]: {
      'Bench Press': PLACEHOLDER_WORKOUT,
    },
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
    addRoutine(date: string, selectedMovement: string, workoutType: WorkoutType) {
      const exercise: Exercise = {};

      exercise[selectedMovement] = workoutType;

      if (this.appLocalStorage.workouts[date]) {
        if (this.appLocalStorage.workouts[date][selectedMovement]) {
          this.appLocalStorage.workouts[date] = {
            ...this.appLocalStorage.workouts[date][selectedMovement],
            ...exercise[selectedMovement],
          };
        } else {
          this.appLocalStorage.workouts[date] = {
            ...this.appLocalStorage.workouts[date],
            ...exercise,
          };
        }
      } else {
        this.appLocalStorage.workouts[date] = exercise;
      }

      localStorage.setItem(STORE_NAME, JSON.stringify(this.appLocalStorage));
    },
  },
});
