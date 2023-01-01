import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import PageProvider from '../config/theme/PageProvider'
import SpinnerComponent from '../components/Loading'
import { LoadingProvider } from '../context/loading'
import { AppProvider } from '../context/appContext'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import '../styles/global.css'
import '../styles/index.scss'

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_WP_SITE_URL}/graphql`,
  cache: new InMemoryCache(),
  // credentials: 'include',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class">
        <PageProvider>
          <AppProvider>
            <LoadingProvider>
              <SpinnerComponent />
              <Component {...pageProps} />
            </LoadingProvider>
          </AppProvider>
        </PageProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
