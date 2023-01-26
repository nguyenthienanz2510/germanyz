import { ApolloProvider } from '@apollo/client'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import SpinnerComponent from '../components/Loading'
import PageProvider from '../config/theme/PageProvider'
import { AppProvider } from '../context/appContext'
import { LoadingProvider } from '../context/loading'
import client from '../lib/apolloClient'
import '../styles/global.css'
import '../styles/index.scss'

NProgress.configure( { showSpinner: false } );
Router.events.on( 'routeChangeStart', () => NProgress.start() );
Router.events.on( 'routeChangeComplete', () => NProgress.done() );
Router.events.on( 'routeChangeError', () => NProgress.done() );

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
