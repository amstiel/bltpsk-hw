import Image from 'next/image';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '@/redux/features/cart';
import { selectProductAmount } from '@/redux/features/cart/selector';
import type { MovieGenre } from '@/redux/services/types';
import { StoreState } from '@/redux/store';

import { CrossIcon } from '@/icons/CrossIcon';
import { MinusIcon } from '@/icons/MinusIcon';
import { PlusIcon } from '@/icons/PlusIcon';

import styles from './MovieCard.module.scss';

type MovieCardProps = {
  id: string;
  title: string;
  genre: MovieGenre;
  imageUrl: string;
};

export const MovieCard: FC<MovieCardProps> = (props) => {
  const { id, title, genre, imageUrl } = props;
  const dispatch = useDispatch();
  const amount = useSelector<StoreState, number>((state) => selectProductAmount(state, id));

  return (
    <article className={styles.root}>
      <Image className={styles.image} src={imageUrl} alt={title} width={100} height={120} />
      <div>
        <h3>{title}</h3>
        <p>{genre}</p>
      </div>
      <div className={styles.actions}>
        <button onClick={() => dispatch(cartActions.decrement(id))}>
          <MinusIcon />
        </button>
        <span>{amount}</span>
        <button onClick={() => dispatch(cartActions.increment(id))}>
          <PlusIcon />
        </button>
        <button onClick={() => dispatch(cartActions.delete(id))}>
          <CrossIcon />
        </button>
      </div>
    </article>
  );
};
