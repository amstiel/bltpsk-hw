'use client';

import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filtersActions, FiltersState } from '@/redux/features/filters';
import { selectFilters } from '@/redux/features/filters/selector';
import { useCinemasQuery } from '@/redux/services/cinemas';
import { MovieGenre } from '@/redux/services/types';
import { StoreState } from '@/redux/store';

import { genreCaptionById } from '@/utils/const';

import { useDebounce } from '@/hooks/use-debounce';

import { Select, SelectOptions } from '@/components/Select/Select';
import { TextField } from '@/components/TextField/TextField';

import styles from './FiltersPanel.module.scss';

const genreOptions: Array<{ value: MovieGenre; caption: string }> = [
  {
    value: 'action',
    caption: genreCaptionById['action'],
  },
  {
    value: 'comedy',
    caption: genreCaptionById['comedy'],
  },
  {
    value: 'fantasy',
    caption: genreCaptionById['fantasy'],
  },
  {
    value: 'horror',
    caption: genreCaptionById['horror'],
  },
];

export const FiltersPanel: FC = () => {
  const filters = useSelector<StoreState, FiltersState>((state) => selectFilters(state));
  const dispatch = useDispatch();
  const { data: cinemas } = useCinemasQuery();
  const [nameValue, setNameValue] = useState<string>('');
  const debouncedName = useDebounce<string>(nameValue, 500);

  const availableCinemasOptions: SelectOptions[] =
    cinemas?.map((cinema) => ({
      value: cinema.id,
      caption: cinema.name,
    })) ?? [];

  useEffect(() => {
    dispatch(filtersActions.setName(debouncedName));
  }, [debouncedName, dispatch]);

  return (
    <aside className={styles.root}>
      <h2 className={styles.title}>Фильтр поиска</h2>
      <fieldset className={styles.fieldset}>
        <TextField
          label="Название"
          placeholder="Введите название"
          value={nameValue}
          onChange={(e) => {
            setNameValue(e.target.value);
          }}
        />
        <Select
          options={genreOptions}
          placeholder="Выберите жанр"
          label="Жанр"
          value={filters.genreId}
          onChange={(newValue) => {
            dispatch(filtersActions.setGenreId(newValue));
          }}
        />
        <Select
          options={availableCinemasOptions}
          placeholder="Выберите кинотеатр"
          label="Кинотеатр"
          value={filters.cinemaId}
          onChange={(newValue) => {
            dispatch(filtersActions.setCinemaId(newValue));
          }}
        />
      </fieldset>
    </aside>
  );
};
