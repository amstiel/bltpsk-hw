import { FC } from 'react';

import { Container } from '@/components/Container/Container';
import { FiltersPanel } from '@/components/FiltersPanel/FiltersPanel';

const HomePage: FC = () => {
  return (
    <main>
      <Container>
        <div>
          <FiltersPanel />
        </div>
      </Container>
    </main>
  );
};

export default HomePage;
