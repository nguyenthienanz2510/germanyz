import Head from 'next/head'
import { ReactNode } from 'react'
import tw from 'twin.macro'
import Footer from './Footer'
import Header from './Header'

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
      <MainLayoutContainerStyle>
        <Header/>
        <MainContainerStyle>{children}</MainContainerStyle>
        <Footer />
      </MainLayoutContainerStyle>
    </>
  )
}

const MainLayoutContainerStyle = tw.div`
  flex min-h-[1000px] flex-col justify-between
`
const MainContainerStyle = tw.div`
  flex-1 container mx-auto my-12
`
