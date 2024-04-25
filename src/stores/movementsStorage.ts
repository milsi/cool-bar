import { defineStore } from 'pinia';
import movementsData from '@/data/movements.json';

export const useMovementsStore = defineStore({
  id: 'movements',
  state: () => ({
    movements: movementsData,
  }),
});
