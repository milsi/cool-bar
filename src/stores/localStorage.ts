import { defineStore } from 'pinia';
import type { LocalStorage } from '@/types/LocalStorage';
import type { User } from '@/types/User';
import type { WorkoutType, Exercise } from '@/types/Routine';

const STORE_NAME = 'cool-bar';
const PLACEHOLDER_USER_INFO: User = {
  name: '--',
  age: Math.floor(Math.random() * (99 - 16 + 1)) + 16,
  sex: 'NB',
  bodyWeight: Math.floor(Math.random() * (200 - 40 + 1)) + 40,
};

const EMPTY_LOCAL_STORAGE: LocalStorage = {
  userProfile: PLACEHOLDER_USER_INFO,
  workouts: {},
};

const getAppLocalStorage = () => {
  const appLocalStorage = localStorage.getItem(STORE_NAME);
  return appLocalStorage ? JSON.parse(appLocalStorage) : EMPTY_LOCAL_STORAGE;
};

const updateLocalStorage = (newLocalStorage: LocalStorage) => {
  localStorage.setItem(STORE_NAME, JSON.stringify(newLocalStorage));
  return newLocalStorage;
};

export const useAppLocalStorageStore = defineStore(STORE_NAME, {
  state: () => ({
    appLocalStorage: <LocalStorage>getAppLocalStorage(),
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
      this.appLocalStorage = updateLocalStorage(newLocalStorage);
    },
    updateUserProfile(newUserProfile: User) {
      this.appLocalStorage.userProfile = newUserProfile;
      this.appLocalStorage = updateLocalStorage(this.appLocalStorage);
    },
    updateRoutine(date: string, movement: string, newContent: WorkoutType) {
      if (!this.appLocalStorage.workouts[date]) {
        this.appLocalStorage.workouts[date] = {};
      }
      this.appLocalStorage.workouts[date][movement] = newContent;
      this.appLocalStorage = updateLocalStorage(this.appLocalStorage);
    },
    deleteMovement(date: string, movement: string) {
      delete this.appLocalStorage.workouts[date][movement];
      if (Object.keys(this.appLocalStorage.workouts[date]).length === 0) {
        delete this.appLocalStorage.workouts[date];
      }
      this.appLocalStorage = updateLocalStorage(this.appLocalStorage);
    },
    addRoutine(date: string, selectedMovement: string, workoutType: WorkoutType) {
      const exercise: Exercise = {};
      exercise[selectedMovement] = workoutType;

      if (this.appLocalStorage.workouts[date]) {
        if (this.appLocalStorage.workouts[date][selectedMovement]) {
          this.appLocalStorage.workouts[date][selectedMovement] = {
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

      this.appLocalStorage = updateLocalStorage(this.appLocalStorage);
    },
  },
});
