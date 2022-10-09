import { defineStore } from 'pinia';

interface IMainState {
  searchType: string;
  test: number;
}

export const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    searchType: 'roommate',
    test: 12
  }),
  actions: {
    setField(field: keyof IMainState, payload: never ) {
      this[field] = payload;
    }
  }
});
