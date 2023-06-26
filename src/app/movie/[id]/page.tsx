import { FC } from 'react';

import { Container } from '@/components/Container/Container';
import { MovieDetails } from '@/components/MovieDetails/MovieDetails';
import { ReviewsList } from '@/components/ReviewsList/ReviewsList';

import styles from './page.module.scss';

type MoviePageProps = {
  params: { id: string };
};

const MoviePage: FC<MoviePageProps> = (props) => {
  const {
    params: { id },
  } = props;

  return (
    <main className={styles.content}>
      <Container>
        <MovieDetails className={styles.details} id={id} />
        <ReviewsList movieId={id} />
      </Container>
    </main>
  );
};

export default MoviePage;
