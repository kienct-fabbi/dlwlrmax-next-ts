import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Loader from '../components/Loader';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (window.document.readyState === 'complete') {
      setIsLoading(false);
      return;
    }
    const onLoaded = () => setIsLoading(false);
    window.addEventListener('load', onLoaded);
    return () => window.removeEventListener('load', onLoaded);
  }, []);
  return (
    <>
      <Provider store={store}>
        <Loader isLoading={isLoading} />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Provider>
    </>
  );
}
export default MyApp;
