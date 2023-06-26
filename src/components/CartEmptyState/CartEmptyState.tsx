import Link from 'next/link';
import { FC } from 'react';

import { CartIcon } from '@/icons/CartIcon';

import styles from './CartEmptyState.module.scss';

export const CartEmptyState: FC = () => {
  return (
    <section className={styles.root}>
      <CartIcon className={styles.icon} />
      <h3 className={styles.title}>В корзине пока пусто</h3>
      <p>
        Выберите билеты на{' '}
        <Link href="/" className={styles.link}>
          главной странице
        </Link>
      </p>
    </section>
  );
};
