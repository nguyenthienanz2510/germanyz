import { ApolloProvider } from '@apollo/client'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
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
              <Component {...pageProps} />
            </LoadingProvider>
          </AppProvider>
        </PageProvider>
      </NextThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
