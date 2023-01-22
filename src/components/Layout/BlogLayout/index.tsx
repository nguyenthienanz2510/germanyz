import Head from 'next/head'
import { ReactNode } from 'react'
import SideBarItem from '../../SideBar/SideBarItem'
import Footer from '../Footer'
import Header from '../Header'

interface BlogLayoutProps {
  title: string
  children: ReactNode
}

export default function BlogLayout({ title, children }: BlogLayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Germanyz' : 'Germanyz'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Germanyz shop" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <div className="flex-1 container mt-12 mb-20">
          <div className="w-[320px] float-right">
            <div className="pl-6">
              <SideBarItem />
              <SideBarItem />
            </div>
          </div>
          <div className="border-r-4 mr-[320px] pr-7">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  )
}
