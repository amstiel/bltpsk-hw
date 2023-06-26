import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

import styles from './TextField.module.scss';

type TextFieldProps = {
  label: string;
  placeholder?: string;
} & Pick<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'value' | 'onChange'
>;

export const TextField: FC<TextFieldProps> = (props) => {
  const { label, placeholder, ...inputProps } = props;

  return (
    <label>
      <span className={styles.label}>{label}</span>
      <input className={styles.input} type="text" placeholder={placeholder} {...inputProps} />
    </label>
  );
};
