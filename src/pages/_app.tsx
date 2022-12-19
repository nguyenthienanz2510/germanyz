import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/global.css'
import GlobalStyles from '../components/GlobalStyles'
import SpinnerComponent from '../components/Loading'
import { LoadingProvider } from '../context/loading'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <LoadingProvider>
        <SpinnerComponent />
        <Component {...pageProps} />
      </LoadingProvider>
    </>
  )
}

export default MyApp
