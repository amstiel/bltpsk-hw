'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectTotalProductsAmount } from '@/redux/features/cart/selector';
import { StoreState } from '@/redux/store';

import { Container } from '@/components/Container/Container';
import { CartIcon } from '@/icons/CartIcon';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const totalAmount = useSelector<StoreState, number>((state) => selectTotalProductsAmount(state));
  const pathname = usePathname();
  const isOnHomePage = pathname === '/';

  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.content}>
          {isOnHomePage ? (
            <h1 className={styles.title}>Билетопоиск</h1>
          ) : (
            <Link href="/" className={styles.titleLink}>
              <h1 className={styles.title}>Билетопоиск </h1>
            </Link>
          )}

          <div className={styles.cartButtonWrapper}>
            {totalAmount > 0 && <span className={styles.amount}>{totalAmount}</span>}
            <Link href="/cart" className={styles.cartButton}>
              <CartIcon />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
