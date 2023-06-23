import { FC, PropsWithChildren } from 'react';

import styles from './Container.module.scss';

type ContainerProps = PropsWithChildren<{}>;

export const Container: FC<ContainerProps> = (props) => {
  const { children } = props;
  return <div className={styles.root}>{children}</div>;
};
