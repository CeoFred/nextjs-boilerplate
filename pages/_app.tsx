import React, { FC, useEffect } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { wrapper } from '../store';


const App = function MyApp({ Component, pageProps }: AppProps) {

  return <>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
}

App.getInitialProps = wrapper.getInitialPageProps(store => ({ pathname, req, res }) => {
  // For the initial page load, getInitialProps will run on the server only.getInitialProps will then run on the client when navigating to a different route via the next / link component or by using next / router.


  return {
    pageProps: {
      hello: true
  }
 }
});


export default wrapper.withRedux(App);
