'use client';

import { FC } from 'react';

import { Container } from '@/components/Container/Container';
import { MoviesList } from '@/components/MoviesList/MoviesList';

import styles from './page.module.scss';

const CartPage: FC = () => {
  return (
    <main className={styles.content}>
      <Container>
        <MoviesList mode="cart" />
      </Container>
    </main>
  );
};

export default CartPage;
