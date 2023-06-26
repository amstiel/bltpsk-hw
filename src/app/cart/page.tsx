'use client';

import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectTotalProductsAmount } from '@/redux/features/cart/selector';

import { CartEmptyState } from '@/components/CartEmptyState/CartEmptyState';
import { Container } from '@/components/Container/Container';
import { MoviesList } from '@/components/MoviesList/MoviesList';

import styles from './page.module.scss';

const CartPage: FC = () => {
  const productsInCartAmount = useSelector(selectTotalProductsAmount);

  return (
    <main className={styles.content}>
      <Container>
        {productsInCartAmount > 0 ? <MoviesList mode="cart" /> : <CartEmptyState />}
      </Container>
    </main>
  );
};

export default CartPage;
