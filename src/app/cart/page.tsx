'use client';

import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectTotalProductsAmount } from '@/redux/features/cart/selector';
import { StoreState } from '@/redux/store';

import { Container } from '@/components/Container/Container';
import { MoviesList } from '@/components/MoviesList/MoviesList';

import styles from './page.module.scss';

const CartPage: FC = () => {
  const totalAmount = useSelector<StoreState, number>((state) => selectTotalProductsAmount(state));

  return (
    <main className={styles.root}>
      <Container>
        <div className={styles.content}>
          <MoviesList mode="cart" />

          {totalAmount > 0 && (
            <div className={styles.summaryBlock}>
              <h5>Итого билетов</h5>
              {totalAmount}
            </div>
          )}
        </div>
      </Container>
    </main>
  );
};

export default CartPage;
