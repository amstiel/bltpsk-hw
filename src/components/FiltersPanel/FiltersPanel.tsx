import { FC } from 'react';

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
  return (
    <aside className={styles.root}>
      <h2 className={styles.title}>Фильтр поиска</h2>
      <fieldset className={styles.fieldset}>
        <TextField label="Название" placeholder="Введите название" />
        <Select options={mockOpts} placeholder="Выберите жанр" label="Жанр" />
        <Select options={mockOpts} placeholder="Выберите кинотеатр" label="Кинотеатр" />
      </fieldset>
    </aside>
  );
};
