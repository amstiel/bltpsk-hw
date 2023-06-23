import Link from 'next/link';
import { FC } from 'react';

import { Container } from '@/components/Container/Container';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.root}>
      <Container>
        <nav>
          <ul className={styles.linksList}>
            <li>
              <Link className={styles.link} href="/faq">
                Вопросы и ответы
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/about">
                О нас
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
};
