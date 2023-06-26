'use client';

import clsx from 'clsx';
import { FC, useState } from 'react';

import { ArrowSquareUpIcon } from '@/icons/ArrowSquareUpIcon';

import styles from './FoldableCard.module.scss';

type FoldableCardProps = {
  title: string;
  content: string;
};

export const FoldableCard: FC<FoldableCardProps> = (props) => {
  const { content, title } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={styles.root} onClick={() => setIsOpen((prevState) => !prevState)}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <ArrowSquareUpIcon className={clsx(styles.icon, isOpen && styles.isOpen)} />
      </header>
      {isOpen && (
        <div className={styles.content}>
          <p>{content}</p>
        </div>
      )}
    </article>
  );
};
