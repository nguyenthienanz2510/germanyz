import Head from 'next/head'
import { ReactNode } from 'react'
import SideBarItem from '../../SideBar/SideBarItem'
import Footer from '../Footer'
import Header from '../Header'

interface MainLayoutProps {
  title: string
  children: ReactNode
}

export default function MainLayout({ title, children }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Germanyz' : 'Germanyz'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Germanyz shop" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <div className="flex-1 container my-12">
          <div className="w-[320px] float-left">
            <div className="pr-6">
              <SideBarItem />
              <SideBarItem />
              <SideBarItem />
              <SideBarItem />
            </div>
          </div>
          <div className="border-l-4 ml-[320px] pl-7">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  )
}
