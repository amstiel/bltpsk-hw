import Image from 'next/image';
import { FC } from 'react';

import type { MovieGenre } from '@/redux/services/types';

import { CrossIcon } from '@/icons/CrossIcon';
import { MinusIcon } from '@/icons/MinusIcon';
import { PlusIcon } from '@/icons/PlusIcon';

import styles from './MovieCard.module.scss';

type MovieCardProps = {
  title: string;

  genre: MovieGenre;
  imageUrl: string;
};

export const MovieCard: FC<MovieCardProps> = (props) => {
  const { title, genre, imageUrl } = props;

  return (
    <article className={styles.root}>
      <Image className={styles.image} src={imageUrl} alt={title} width={100} height={120} />
      <div>
        <h3>{title}</h3>
        <p>{genre}</p>
      </div>
      <div className={styles.actions}>
        <button>
          <MinusIcon />
        </button>
        <span>12</span>
        <button>
          <PlusIcon />
        </button>
        <button>
          <CrossIcon />
        </button>
      </div>
    </article>
  );
};
