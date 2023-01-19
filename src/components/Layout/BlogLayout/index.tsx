import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'

interface BlogLayoutProps {
    title: string,
    children: ReactNode
}

export default function BlogLayout({title, children}: BlogLayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Germanyz' : 'Germanyz'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Germanyz shop" />
      </Head>
      <div className='flex min-h-[1600px] flex-col justify-between'>
        <Header/>
        <div className='flex-1 container my-12'>{children}</div>
        <Footer />
      </div>
    </>
  )
}
