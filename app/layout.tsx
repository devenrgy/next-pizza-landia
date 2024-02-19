import './globals.css';

import type { Metadata } from 'next';
import { Nunito as FontSans } from 'next/font/google';

import { Suspense } from 'react';

import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';

import { cn } from '@/lib/utils';

export const fontSans = FontSans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Пицца Ландия - ваш кусочек пиццы в раю',
  description: 'Пицца Ландия - ваш кусочек пиццы в раю',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body
        className={cn(
          'bg-gradient-to-br from-orange-200 to-orange-400 p-10 font-sans antialiased dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-700',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <div className='container grid min-h-[calc(100vh-80px)] grid-rows-[min-content_1fr] rounded-xl bg-background px-4 py-6 shadow-lg dark:bg-background xl:px-16'>
            <Header />
            <Suspense>
              <main className='mt-10'>{children}</main>
            </Suspense>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
