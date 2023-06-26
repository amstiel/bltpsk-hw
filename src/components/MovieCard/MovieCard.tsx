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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const amount = useSelector<StoreState, number>((state) => selectProductAmount(state, id));

  return (
    <article className={styles.root}>
      <Image className={styles.image} src={imageUrl} alt={title} width={100} height={120} />
      <div>
        <Link href={`/movie/${id}`} className={styles.link}>
          <h1 className={styles.title}>{title}</h1>
        </Link>
        <p className={styles.genre}>{genreCaptionById[genre]}</p>
      </div>
      <div className={styles.actions}>
        <button
          className={styles.actionButton}
          disabled={amount === 0}
          onClick={() => dispatch(cartActions.decrement(id))}
        >
          <MinusIcon />
        </button>
        <span className={styles.amount}>{amount}</span>
        <button
          className={styles.actionButton}
          disabled={amount === 30}
          onClick={() => dispatch(cartActions.increment(id))}
        >
          <PlusIcon />
        </button>
        {isDeletable && (
          <button
            className={styles.deleteButton}
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <CrossIcon />
          </button>
        )}
      </div>

      <DialogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          dispatch(cartActions.delete(id));
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        title="Удаление билета"
        text="Вы уверены, что хотите удалить билет?"
      />
    </article>
  );
};
