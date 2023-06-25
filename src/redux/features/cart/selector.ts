import type { StoreState } from '@/redux/store';

const selectCartModule = (state: StoreState) => state.cart;

export const selectProductAmount = (state: StoreState, id: string) =>
  selectCartModule(state)[id] || 0;

export const selectTotalProductsAmount = (state: StoreState) =>
  Object.values(selectCartModule(state)).reduce((acc, value) => {
    acc += value;
    return acc;
  }, 0);

export const selectProductIdsInCart = (state: StoreState) => Object.keys(selectCartModule(state));
