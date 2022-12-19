import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/global.css'
import GlobalStyles from '../components/GlobalStyles'
import SpinnerComponent from '../components/Loading'
import { LoadingProvider } from '../context/loading'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider attribute="class">
        <LoadingProvider>
          <SpinnerComponent />
          <Component {...pageProps} />
        </LoadingProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
