'use client';

import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectTotalProductsAmount } from '@/redux/features/cart/selector';
import { StoreState } from '@/redux/store';

import { Container } from '@/components/Container/Container';
import { CartIcon } from '@/icons/CartIcon';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const totalAmount = useSelector<StoreState, number>((state) => selectTotalProductsAmount(state));

  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Билетопоиск {totalAmount}</h1>

          <button className={styles.cartButton}>
            <CartIcon />
          </button>
        </div>
      </Container>
    </header>
  );
};
