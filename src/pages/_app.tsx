import { ApolloProvider } from '@apollo/client'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import SpinnerComponent from '../components/Loading'
import PageProvider from '../config/theme/PageProvider'
import { AppProvider } from '../context/appContext'
import { LoadingProvider } from '../context/loading'
import client from '../lib/apolloClient'
import '../styles/global.css'
import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <NextThemeProvider attribute="class">
        <PageProvider>
          <AppProvider>
            <LoadingProvider>
              <SpinnerComponent />
              <Head>
                <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
                />
              </Head>
              <Component {...pageProps} />
            </LoadingProvider>
          </AppProvider>
        </PageProvider>
      </NextThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
