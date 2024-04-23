import type { User } from './User';
import type { Routine } from './Routine';

export type LocalStorage = {
  userProfile: User;
  workouts: Routine;
};
