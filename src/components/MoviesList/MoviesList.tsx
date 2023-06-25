'use client';

import { FC } from 'react';

import { useMoviesQuery } from '@/redux/services/movies';

import { MovieCard } from '@/components/MovieCard/MovieCard';

export const MoviesList: FC = () => {
  const { data: movies } = useMoviesQuery();

  return (
    <section style={{ flexGrow: 1 }}>
      {movies?.map((movie) => (
        <MovieCard
          id={movie.id}
          key={movie.id}
          genre={movie.genre}
          title={movie.title}
          imageUrl={movie.posterUrl}
        />
      ))}
    </section>
  );
};
