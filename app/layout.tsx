import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Esep — система управления бухгалтерской фирмой (НК 2026)',
  description:
    'Система управления бухгалтерской фирмой: все клиенты, сроки и расчёты в одном месте. Рутину (выписка → налог → формы 910/200/300, ЭСФ) Esep берёт на себя. Веди больше клиентов без найма. Для бухгалтерских фирм и аутсорс-бухгалтеров Казахстана.',
  keywords:
    'Налоговый кодекс 2026, бухгалтерская фирма, аутсорс бухгалтерия, форма 910, форма 200, форма 300, ИСНА, кабинет бухгалтера, мульти-клиент, КГД, ЭЦП',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: 'Esep — система управления бухгалтерской фирмой',
    description:
      'Веди больше клиентов без найма. Все клиенты, сроки и расчёты — на одном экране, рутина автоматически. Под Налоговый кодекс 2026.',
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
