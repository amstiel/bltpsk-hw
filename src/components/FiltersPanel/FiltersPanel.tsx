import { FC } from 'react';

import { Select, SelectOptions } from '@/components/Select/Select';

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
    <aside>
      <h2>Фильтр поиска</h2>
      <Select options={mockOpts} />
    </aside>
  );
};
