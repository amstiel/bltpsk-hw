import { FC } from 'react';

import styles from './TextField.module.scss';

type TextFieldProps = {
  label: string;
  placeholder?: string;
};

export const TextField: FC<TextFieldProps> = (props) => {
  const { label, placeholder } = props;

  return (
    <label>
      <span className={styles.label}>{label}</span>
      <input className={styles.input} type="text" placeholder={placeholder} />
    </label>
  );
};
