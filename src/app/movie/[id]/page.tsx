import { FC } from 'react';

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
    <div>
      <MovieDetails id={id} />
    </div>
  );
};

export default MoviePage;
