import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import PageProvider from '../components/App/Theme/PageProvider'
import SpinnerComponent from '../components/Loading'
import { LoadingProvider } from '../context/loading'
import '../styles/global.css'
import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <PageProvider>
        <LoadingProvider>
          <SpinnerComponent />
          <Component {...pageProps} />
        </LoadingProvider>
      </PageProvider>
    </ThemeProvider>
  )
}

export default MyApp
