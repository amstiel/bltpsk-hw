import { Metadata } from 'next';
import { FC } from 'react';

import { Container } from '@/components/Container/Container';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Билетопоиск | О нас',
};

const AboutPage: FC = () => {
  return (
    <main className={styles.root}>
      <Container>
        <article className={styles.content}>
          <h2 className={styles.title}>О нас</h2>
          <p className={styles.paragraph}>
            Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы,
            купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить
            фильмам оценки, написать рецензии и дополнить описание фильмов.
          </p>
          <p className={styles.paragraph}>
            Был запущен в 2003 году. Портал предоставляет пользователям информацию о фильмах и их
            создателях, новости кино, интервью с актерами и другими знаменитостями, рецензии
            пользователей, расписание сеансов в кинотеатрах, ТВ-программу и другие разделы.
          </p>
          <p className={styles.paragraph}>
            Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и Дмитрий Суханов.
            Владельцем проекта являлась компания ООО «Билетопоиск», которой принадлежало 60 % акций
            проекта, 40 % акций принадлежало её совладельцу — французской компании ООО AlloCiné. 15
            октября 2013 года сервис купила компания «Яндекс» (размер сделки — $80 млн, около 2,6
            млрд рублей на то время).
          </p>
        </article>
      </Container>
    </main>
  );
};

export default AboutPage;
