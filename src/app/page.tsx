import { FC } from 'react';

import { Container } from '@/components/Container/Container';
import { FiltersPanel } from '@/components/FiltersPanel/FiltersPanel';
import { MoviesList } from '@/components/MoviesList/MoviesList';

import styles from './page.module.scss';

const HomePage: FC = () => {
  return (
    <main>
      <Container>
        <div className={styles.content}>
          <FiltersPanel />
          <div>
            <MoviesList />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default HomePage;
