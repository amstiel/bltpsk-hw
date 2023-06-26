'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { useMovieByIdQuery } from '@/redux/services/movies';

import { genreCaptionById } from '@/utils/const';

import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import { MovieCartActions } from '@/components/MocieCartActions/MovieCartActions';
import { StateInfo } from '@/components/StateInfo/StateInfo';
import { WarningIcon } from '@/icons/WarningIcon';

import styles from './MovieDetails.module.scss';

type MovieDetailsProps = {
  id: string;
  className?: string;
};

export const MovieDetails: FC<MovieDetailsProps> = (props) => {
  const { id, className } = props;
  const { data: movieDetails, isLoading, isFetching, isError } = useMovieByIdQuery(id);

  if (movieDetails === null || isError) {
    return (
      <StateInfo
        title="Ошибка загрузки фильма"
        description={<p>Возможно, недоступен сервер или указан неверный ID фильма.</p>}
        icon={WarningIcon}
      />
    );
  }

  if (isLoading || isFetching) {
    return (
      <StateInfo
        title="Загрузка..."
        description={<p>Данные о фильме подгружаются, пожалуйста, подождите.</p>}
        icon={LoadingSpinner}
      />
    );
  }

  if (movieDetails === undefined) return null;

  return (
    <section className={clsx(styles.root, className)}>
      <Image
        className={styles.image}
        src={movieDetails.posterUrl}
        alt={movieDetails.title}
        width={400}
        height={500}
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{movieDetails.title}</h2>
          <MovieCartActions movieId={id} />
        </div>
        <dl className={styles.definitionsList}>
          <div className={styles.definitionRow}>
            <dt>Жанр:</dt>
            <dd>{genreCaptionById[movieDetails.genre]}</dd>
          </div>

          <div className={styles.definitionRow}>
            <dt>Год выпуска:</dt>
            <dd>{movieDetails.releaseYear}</dd>
          </div>

          <div className={styles.definitionRow}>
            <dt>Рейтинг:</dt>
            <dd>{movieDetails.rating}</dd>
          </div>

          <div className={styles.definitionRow}>
            <dt>Режиссёр:</dt>
            <dd>{movieDetails.director}</dd>
          </div>
        </dl>

        <h3 className={styles.subtitle}>Описание</h3>
        <p className={styles.description}>{movieDetails.description}</p>
      </div>
    </section>
  );
};
