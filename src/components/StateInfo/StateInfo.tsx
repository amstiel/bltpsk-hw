import { FC, ReactElement, SVGProps } from 'react';

import styles from './StateInfo.module.scss';

type StateInfoProps = {
  title: string;
  description: ReactElement;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export const StateInfo: FC<StateInfoProps> = (props) => {
  const { title, description, icon: Icon } = props;

  return (
    <section className={styles.root}>
      <Icon className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      {description}
    </section>
  );
};
