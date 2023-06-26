import type { StoreState } from '@/redux/store';

export const selectFilters = (state: StoreState) => state.filters;
