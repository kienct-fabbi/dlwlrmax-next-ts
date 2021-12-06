import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';

import store from '../redux/store';
import { Provider } from 'react-redux';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
