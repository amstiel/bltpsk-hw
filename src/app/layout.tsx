import clsx from 'clsx';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

import { StoreProvider } from '@/redux/StoreProvider';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import './globals.css';

const sfProFont = localFont({
  src: [
    {
      path: '../fonts/San Francisco Pro Text/SFProDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-inputs',
  display: 'swap',
});

const robotoFont = Roboto({
  subsets: ['cyrillic'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Билетопоиск',
  description: 'Поиск дешевых кинобилетов',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={clsx(sfProFont.variable, robotoFont.className)}>
        <StoreProvider>
          <div className="layout">
            <Header />
            {children}
            <Footer />
          </div>

          <div className="portals-container">
            <div id="dropdowns-portal-wrapper" />
            <div id="modals-portal-wrapper" />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
