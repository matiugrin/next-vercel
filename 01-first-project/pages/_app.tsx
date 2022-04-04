// import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css'


type NextPageWithLayout = NextPage & {

  // podemos hacerlo de las 2 formas

  // getLayout?: ( page: ReactElement ) => ReactNode;
  getLayout?: ( page: JSX.Element ) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page);

  // return <Component {...pageProps} />

  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
