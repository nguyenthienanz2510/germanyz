import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import PageProvider from '../config/theme/PageProvider'
import SpinnerComponent from '../components/Loading'
import { LoadingProvider } from '../context/loading'
import { AppProvider } from '../context/appContext'
import '../styles/global.css'
import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  )
}

export default MyApp
