'use client';

import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectProductIdsInCart } from '@/redux/features/cart/selector';
import { useMoviesQuery } from '@/redux/services/movies';
import { StoreState } from '@/redux/store';

import { MovieCard } from '@/components/MovieCard/MovieCard';

type MoviesListProps = {
  mode?: 'home' | 'cart';
};

export const MoviesList: FC<MoviesListProps> = (props) => {
  const { mode = 'home' } = props;
  const { data: movies } = useMoviesQuery();
  const movieIdsInCartArray = useSelector<StoreState, string[]>((state) =>
    selectProductIdsInCart(state)
  );
  const movieIdsInCart = new Set(movieIdsInCartArray);

  const moviesToRender =
    mode === 'home' ? movies : movies?.filter((movie) => movieIdsInCart.has(movie.id));

  return (
    <section style={{ flexGrow: 1 }}>
      {moviesToRender?.map((movie) => (
        <MovieCard
          id={movie.id}
          key={movie.id}
          genre={movie.genre}
          title={movie.title}
          isDeletable={mode === 'cart'}
          imageUrl={movie.posterUrl}
        />
      ))}
    </section>
  );
};
