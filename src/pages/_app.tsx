import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ここにタイトル</title>
        <meta
          name='viewport'
          content='minimum-scale=1,initial-scale=1,width=device-width'
        />
        <meta
          content='ここに説明'
          name='description'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
