export type Set = {
  set: number;
  reps: number | null;
  weight: number | null;
};

export type WorkoutType = {
  Warmup: Set[];
  Working: Set[];
};

export type Exercise = {
  [key: string]: WorkoutType;
};

export type Routine = {
  [date: string]: Exercise;
};
