import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'

interface MainLayoutProps {
    title: string,
    children: ReactNode
}

export default function MainLayout({title, children}: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Germanyz' : 'Germanyz'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Germanyz shop" />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <Header/>
        <div className='flex-1 container my-12'>{children}</div>
        <Footer />
      </div>
    </>
  )
}
