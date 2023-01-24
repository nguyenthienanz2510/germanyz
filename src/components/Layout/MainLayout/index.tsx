import Head from 'next/head'
import { ReactNode } from 'react'
import { GetBlogCategoriesQuery, GetPostsQuery } from '../../../generated/graphql'
import Footer from '../Footer'
import Header from '../Header'
import MainLayoutSideBar from './SideBar'

interface MainLayoutProps {
  title: string
  children: ReactNode
  blogCategories?: GetBlogCategoriesQuery
  latestPosts?: GetPostsQuery
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children, blogCategories, latestPosts }) => {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Germanyz' : 'Germanyz'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Germanyz shop" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <div className="flex-1 container mt-12 mb-20 relative">
          <div className="lg:border-l-4 lg:ml-[320px] lg:pl-7">{children}</div>
          <MainLayoutSideBar blogCategories={blogCategories || {}} latestPosts={latestPosts || {}}/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
