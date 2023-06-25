'use client';

import { useCinemasQuery } from '@/redux/services/cinemas';
import { FC } from 'react';

export const MoviesList: FC = () => {
  const { data: kek } = useCinemasQuery();

  return <div></div>;
};
