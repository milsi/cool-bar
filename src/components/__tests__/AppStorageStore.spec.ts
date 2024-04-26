import { createPinia } from 'pinia';
import { useAppLocalStorageStore } from '@/stores/localStorage';
import { expect, test } from 'vitest';
import type { WorkoutType } from '@/types/Routine';

function setup() {
  const pinia = createPinia();
  return { pinia };
}

test('updates user profile correctly', async () => {
  const { pinia } = setup();
  const store = useAppLocalStorageStore(pinia);
  const newUserProfile = {
    name: 'John',
    age: 35,
    sex: 'M',
    bodyWeight: 80,
  };

  store.updateUserProfile(newUserProfile);

  expect(store.userInfo).toEqual(newUserProfile);
});

test('updates routine correctly', async () => {
  const { pinia } = setup();
  const store = useAppLocalStorageStore(pinia);
  const date: string = '2024-04-26';
  const movement: string = 'Squat';
  const newContent: WorkoutType = {
    Warmup: [
      {
        set: 1,
        reps: 5,
        weight: 30,
      },
      {
        set: 2,
        reps: 5,
        weight: 30,
      },
    ],
    Working: [
      {
        set: 3,
        reps: 5,
        weight: 50,
      },
    ],
  };

  store.updateRoutine(date, movement, newContent);

  expect(store.workouts[date][movement]).toEqual(newContent);
});

test('deletes movement correctly', async () => {
  const { pinia } = setup();
  const store = useAppLocalStorageStore(pinia);
  const date = '2024-04-26';
  const movement = 'Bench Press';

  store.deleteMovement(date, movement);

  expect(store.workouts[date][movement]).toBeUndefined();
});

test('adds routine correctly', async () => {
  const { pinia } = setup();
  const store = useAppLocalStorageStore(pinia);
  const date = '2024-04-27';
  const selectedMovement = 'Deadlift';
  const workoutType = {
    Warmup: [
      {
        set: 1,
        reps: 5,
        weight: 40,
      },
      {
        set: 2,
        reps: 5,
        weight: 40,
      },
    ],
    Working: [
      {
        set: 3,
        reps: 5,
        weight: 60,
      },
    ],
  };

  store.addRoutine(date, selectedMovement, workoutType);

  expect(store.workouts[date][selectedMovement]).toEqual(workoutType);
});