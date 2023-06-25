import { api } from '@/redux/services/api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api.middleware]),
  devTools: process.env.NODE_ENV !== 'production',
});
