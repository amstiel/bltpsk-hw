import { FC } from 'react';

import { Container } from '@/components/Container/Container';
import { CartIcon } from '@/icons/CartIcon';

import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Билетопоиск</h1>

          <button className={styles.cartButton}>
            <CartIcon />
          </button>
        </div>
      </Container>
    </header>
  );
};
