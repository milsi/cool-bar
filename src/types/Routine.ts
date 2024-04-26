export type Row = {
  set: number;
  reps: number | null;
  weight: number | null;
};

export type WorkoutType = {
  Warmup: Row[];
  Working: Row[];
};

export type Exercise = {
  [key: string]: WorkoutType;
};

export type Routine = {
  [date: string]: Exercise;
};
