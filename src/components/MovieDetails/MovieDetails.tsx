'use client';

import Image from 'next/image';
import { FC } from 'react';

import { useMovieByIdQuery } from '@/redux/services/movies';

import { genreCaptionById } from '@/utils/const';

import styles from './MovieDetails.module.scss';

type MovieDetailsProps = {
  id: string;
};

export const MovieDetails: FC<MovieDetailsProps> = (props) => {
  const { id } = props;
  console.log('id', id);
  const { data: movieDetails } = useMovieByIdQuery(id);

  if (movieDetails === undefined) return null;

  return (
    <section className={styles.root}>
      <Image
        className={styles.image}
        src={movieDetails.posterUrl}
        alt={movieDetails.title}
        width={400}
        height={500}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{movieDetails.title}</h2>
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
        <p>{movieDetails.description}</p>
      </div>
    </section>
  );
};