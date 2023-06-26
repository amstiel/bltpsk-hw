'use client';

import { FC } from 'react';

import { useMovieByIdQuery } from '@/redux/services/movies';

type MovieDetailsProps = {
  id: string;
};

export const MovieDetails: FC<MovieDetailsProps> = (props) => {
  const { id } = props;
  console.log('id', id);
  const { data: movieDetails } = useMovieByIdQuery(id);

  return <div>{movieDetails?.title}</div>;
};
