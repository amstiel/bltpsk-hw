import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from '@/redux/features/cart';
import { api } from '@/redux/services/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api.middleware]),
  devTools: process.env.NODE_ENV !== 'production',
});

export type StoreState = ReturnType<typeof store.getState>;
