import Image from 'next/image';
import { FC } from 'react';

import styles from './ReviewCard.module.scss';

type ReviewCardProps = {
  name: string;
  text: string;
  rating: number;
  avatarUrl?: string;
};

export const ReviewCard: FC<ReviewCardProps> = (props) => {
  const { name, text, rating, avatarUrl = '/review-fallback.png' } = props;

  return (
    <article className={styles.root}>
      <Image className={styles.image} src={avatarUrl} alt={name} width={100} height={100} />

      <div className={styles.content}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span>
          <span>
            Оценка: <strong>{rating}</strong>
          </span>
        </header>
        <p>{text}</p>
      </div>
    </article>
  );
};
