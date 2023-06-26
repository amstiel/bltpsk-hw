'use client';

import Link from 'next/link';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectProductIdsInCart } from '@/redux/features/cart/selector';
import { FiltersState } from '@/redux/features/filters';
import { selectFilters } from '@/redux/features/filters/selector';
import { useMoviesQuery } from '@/redux/services/movies';
import { StoreState } from '@/redux/store';

import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import { MovieCard } from '@/components/MovieCard/MovieCard';
import { StateInfo } from '@/components/StateInfo/StateInfo';
import { CartIcon } from '@/icons/CartIcon';
import { SearchOffIcon } from '@/icons/SearchOffIcon';
import { WarningIcon } from '@/icons/WarningIcon';

type MoviesListProps = {
  mode?: 'home' | 'cart';
};

export const MoviesList: FC<MoviesListProps> = (props) => {
  const { mode = 'home' } = props;
  const { name, genreId, cinemaId } = useSelector<StoreState, FiltersState>((state) =>
    selectFilters(state)
  );
  const {
    data: movies,
    isSuccess,
    isLoading,
    isFetching,
    isError,
  } = useMoviesQuery(mode === 'home' ? cinemaId : undefined);
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

  if (isError) {
    return (
      <StateInfo
        title="Ошибка загрузки данных"
        description={<p>Возможно, недоступен бэкенд или выполняется неверный запрос.</p>}
        icon={WarningIcon}
      />
    );
  }

  if (isLoading || isFetching) {
    return (
      <StateInfo
        title="Загрузка..."
        description={<p>Данные подгружаются, пожалуйста, подождите.</p>}
        icon={LoadingSpinner}
      />
    );
  }

  if (moviesToRender?.length === 0) {
    if (mode === 'home') {
      return (
        <StateInfo
          title="Не найдено"
          description={<p>По вашему запросу не найдено фильмов. Пожалуйста, измените фильтры.</p>}
          icon={SearchOffIcon}
        />
      );
    } else {
      return (
        <StateInfo
          title="В корзине пока пусто"
          description={
            <p>
              Выберите билеты на{' '}
              <Link href="/" style={{ textDecoration: 'underline' }}>
                главной странице
              </Link>
            </p>
          }
          icon={CartIcon}
        />
      );
    }
  }

  return (
    <section style={{ flexGrow: 1 }}>
      {isSuccess &&
        moviesToRender?.map((movie) => (
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
