import { FC, useState } from 'react';
import { createPortal } from 'react-dom';

import { CrossIcon } from '@/icons/CrossIcon';

import styles from './DialogModal.module.scss';

type DialogModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  text: string;
};

export const DialogModal: FC<DialogModalProps> = (props) => {
  const { isOpen, onClose, onCancel, title, onConfirm, text } = props;

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <section className={styles.root} onClick={(event) => event.stopPropagation()}>
        <header className={styles.header}>
          <h6 className={styles.title}>{title}</h6>
          <button className={styles.closeButton} onClick={onClose}>
            <CrossIcon />
          </button>
        </header>
        <p className={styles.text}>{text}</p>
        <div className={styles.actions}>
          <button className={styles.confirmButton} onClick={onConfirm}>
            Да
          </button>
          <button className={styles.cancelButton} onClick={onClose}>
            Нет
          </button>
        </div>
      </section>
    </div>,
    document.getElementById('modals-portal-wrapper')!
  );
};
