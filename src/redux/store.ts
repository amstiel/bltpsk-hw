import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartReducer } from '@/redux/features/cart';
import { filtersReducer } from '@/redux/features/filters';
import { api } from '@/redux/services/api';

const persistConfig = {
  key: 'root',
  whitelist: ['cart'],
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [api.reducerPath]: api.reducer,
    cart: cartReducer,
    filters: filtersReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([api.middleware]),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type StoreState = ReturnType<typeof store.getState>;
