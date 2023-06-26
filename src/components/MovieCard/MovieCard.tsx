import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '@/redux/features/cart';
import { selectProductAmount } from '@/redux/features/cart/selector';
import type { MovieGenre } from '@/redux/services/types';
import { StoreState } from '@/redux/store';

import { genreCaptionById } from '@/utils/const';

import { DialogModal } from '@/components/DialogModal/DialogModal';
import { MovieCartActions } from '@/components/MocieCartActions/MovieCartActions';
import { CrossIcon } from '@/icons/CrossIcon';
import { MinusIcon } from '@/icons/MinusIcon';
import { PlusIcon } from '@/icons/PlusIcon';

import styles from './MovieCard.module.scss';

type MovieCardProps = {
  id: string;
  title: string;
  genre: MovieGenre;
  imageUrl: string;
  isDeletable?: boolean;
};

export const MovieCard: FC<MovieCardProps> = (props) => {
  const { id, title, genre, imageUrl, isDeletable = false } = props;

  return (
    <article className={styles.root}>
      <Image className={styles.image} src={imageUrl} alt={title} width={100} height={120} />
      <div>
        <Link href={`/movie/${id}`} className={styles.link}>
          <h1 className={styles.title}>{title}</h1>
        </Link>
        <p className={styles.genre}>{genreCaptionById[genre]}</p>
      </div>

      <MovieCartActions movieId={id} isDeletable={isDeletable} />
    </article>
  );
};
