'use client';

import { store } from '@/redux/store';
import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

export const StoreProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
