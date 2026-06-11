import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Esep для бухгалтерских фирм — Кабинет бухгалтера под Налоговый кодекс 2026',
  description:
    'Все клиенты вашей фирмы — в одном кабинете. Формы 910, 200, 300 считаются автоматически и выгружаются в формат ИСНА. Заменяет связку «1С + Excel + кабинет КГД» одним инструментом. Для бухгалтерских фирм и аутсорс-бухгалтеров Казахстана.',
  keywords:
    'Налоговый кодекс 2026, бухгалтерская фирма, аутсорс бухгалтерия, форма 910, форма 200, форма 300, ИСНА, кабинет бухгалтера, мульти-клиент, КГД, ЭЦП',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: 'Esep для бухгалтерских фирм — все клиенты в одном кабинете',
    description:
      'Кабинет бухгалтера под Налоговый кодекс 2026. Формы 910/200/300 автоматически в ИСНА. Все клиенты в одном окне.',
    type: 'website',
    locale: 'ru_KZ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
