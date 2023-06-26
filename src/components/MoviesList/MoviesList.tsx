'use client';

import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectProductIdsInCart } from '@/redux/features/cart/selector';
import { FiltersState } from '@/redux/features/filters';
import { selectFilters } from '@/redux/features/filters/selector';
import { useMoviesQuery } from '@/redux/services/movies';
import { StoreState } from '@/redux/store';

import { MovieCard } from '@/components/MovieCard/MovieCard';

type MoviesListProps = {
  mode?: 'home' | 'cart';
};

export const MoviesList: FC<MoviesListProps> = (props) => {
  const { mode = 'home' } = props;
  const { name, genreId, cinemaId } = useSelector<StoreState, FiltersState>((state) =>
    selectFilters(state)
  );
  const { data: movies } = useMoviesQuery(cinemaId);
  const movieIdsInCartArray = useSelector<StoreState, string[]>((state) =>
    selectProductIdsInCart(state)
  );
  const movieIdsInCart = new Set(movieIdsInCartArray);

  const moviesToRender =
    mode === 'home'
      ? movies
          ?.filter((movie) => (name !== undefined ? movie.title.includes(name) : true))
          ?.filter((movie) => (genreId !== undefined ? movie.genre === genreId : true))
      : movies?.filter((movie) => movieIdsInCart.has(movie.id));

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
