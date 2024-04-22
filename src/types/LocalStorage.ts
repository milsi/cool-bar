import type { User } from './User';
import type { Workout } from './Workout';

export type LocalStorage = {
  userProfile: User;
  workouts: {
    [date: string]: Workout[];
  };
};
