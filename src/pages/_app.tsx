import GlobalMenu from '@/views/components/templates/GlobalMenu';
import '@/views/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalMenu>
      <Component {...pageProps} />
    </GlobalMenu>
  );
}
