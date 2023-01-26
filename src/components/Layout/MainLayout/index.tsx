import Head from 'next/head'
import { ReactNode } from 'react'
import {
  GetBlogCategoriesQuery,
  GetPostsQuery,
} from '../../../generated/graphql'
import Footer from '../Footer'
import Header from '../Header'
import MainLayoutSideBar from './SideBar'

interface MainLayoutProps {
  SEO: {
    title: string;
    description?: string;
    metaImage?: string;
  }
  children: ReactNode
  blogCategories?: GetBlogCategoriesQuery
  latestPosts?: GetPostsQuery
}

const MainLayout: React.FC<MainLayoutProps> = ({
  SEO,
  children,
  blogCategories,
  latestPosts,
}) => {
  return (
    <main>
      <Head>
        <title>{SEO.title ? SEO.title + ' - Germanyz' : 'Germanyz'}</title>
        <meta
          name="description"
          content={SEO.title ? SEO.title + ' - Germanyz' : 'Germanyz'}
        />
        <meta property="og:image"  content="https://d1ubwt7z1ubyyw.cloudfront.net/uploads/traditional-christmas-food-meta-1673594986.jpg" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <div className="flex-1 container mt-12 mb-20 relative">
          <div className="lg:border-l-4 lg:ml-[320px] lg:pl-7">{children}</div>
          <MainLayoutSideBar
            blogCategories={blogCategories || {}}
            latestPosts={latestPosts || {}}
          />
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default MainLayout
