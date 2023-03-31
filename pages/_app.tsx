import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Bebas_Neue } from 'next/font/google';

// https://nextjs.org/docs/basic-features/font-optimization
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${bebas.variable} font-bebas`}>
      <Component {...pageProps} />
    </main>
  );
}
