import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '@/redux/features/cart';
import { selectProductAmount } from '@/redux/features/cart/selector';
import { StoreState } from '@/redux/store';

import { DialogModal } from '@/components/DialogModal/DialogModal';
import { CrossIcon } from '@/icons/CrossIcon';
import { MinusIcon } from '@/icons/MinusIcon';
import { PlusIcon } from '@/icons/PlusIcon';

import styles from './MovieCartActions.module.scss';

type MovieCartActionsProps = {
  movieId: string;
  isDeletable?: boolean;
};

export const MovieCartActions: FC<MovieCartActionsProps> = (props) => {
  const { movieId, isDeletable = false } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const amount = useSelector<StoreState, number>((state) => selectProductAmount(state, movieId));
  const dispatch = useDispatch();

  return (
    <div className={styles.actions}>
      <button
        className={styles.actionButton}
        disabled={amount === 0}
        onClick={() => dispatch(cartActions.decrement(movieId))}
      >
        <MinusIcon />
      </button>
      <span className={styles.amount}>{amount}</span>
      <button
        className={styles.actionButton}
        disabled={amount === 30}
        onClick={() => dispatch(cartActions.increment(movieId))}
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

      <DialogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          dispatch(cartActions.delete(movieId));
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        title="Удаление билета"
        text="Вы уверены, что хотите удалить билет?"
      />
    </div>
  );
};
