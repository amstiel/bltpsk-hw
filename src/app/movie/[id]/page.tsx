import { FC } from 'react';

import { Container } from '@/components/Container/Container';
import { MovieDetails } from '@/components/MovieDetails/MovieDetails';

type MoviePageProps = {
  params: { id: string };
};

const MoviePage: FC<MoviePageProps> = (props) => {
  const {
    params: { id },
  } = props;

  console.log('id page', id);

  return (
    <main>
      <Container>
        <MovieDetails id={id} />
      </Container>
    </main>
  );
};

export default MoviePage;
