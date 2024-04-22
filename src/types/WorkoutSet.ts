import type { Movement } from './Movement';

export type WorkoutSet = {
  movement: Movement;
  set: number;
  reps: number;
  weight: number;
};
