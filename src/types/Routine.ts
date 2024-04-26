export type Workout = {
  set: number;
  reps: number | null;
  weight: number | null;
};

export type WorkoutType = {
  Warmup: Workout[];
  Working: Workout[];
};

export type Exercise = {
  [key: string]: WorkoutType;
};

export type Routine = {
  [date: string]: Exercise;
};
