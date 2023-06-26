'use client';

import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filtersActions, FiltersState } from '@/redux/features/filters';
import { selectFilters } from '@/redux/features/filters/selector';
import { StoreState } from '@/redux/store';

import { Select, SelectOptions } from '@/components/Select/Select';
import { TextField } from '@/components/TextField/TextField';

import styles from './FiltersPanel.module.scss';

const mockOpts: SelectOptions[] = [
  {
    value: '1',
    caption: 'Option 1',
  },
  {
    value: '2',
    caption: 'Option 2',
  },
  {
    value: '3',
    caption: 'Option 3',
  },
];

export const FiltersPanel: FC = () => {
  const filters = useSelector<StoreState, FiltersState>((state) => selectFilters(state));
  const dispatch = useDispatch();

  return (
    <aside className={styles.root}>
      <h2 className={styles.title}>Фильтр поиска</h2>
      <fieldset className={styles.fieldset}>
        <TextField
          label="Название"
          placeholder="Введите название"
          value={filters.name}
          onChange={(e) => {
            dispatch(filtersActions.setName(e.target.value));
          }}
        />
        <Select options={mockOpts} placeholder="Выберите жанр" label="Жанр" />
        <Select options={mockOpts} placeholder="Выберите кинотеатр" label="Кинотеатр" />
      </fieldset>
    </aside>
  );
};
