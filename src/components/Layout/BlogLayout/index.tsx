import Head from 'next/head'
import { ReactNode } from 'react'
import {
  GetBlogCategoriesQuery,
  GetPostsQuery,
} from '../../../generated/graphql'
import Footer from '../Footer'
import Header from '../Header'
import BlogLayoutSideBar from './SideBar'

interface BlogLayoutProps {
  SEO: {
    title: string
    description?: string
    metaImage?: string
  }
  children: ReactNode
  blogCategories: GetBlogCategoriesQuery
  latestPosts: GetPostsQuery
}

export default function BlogLayout({
  SEO,
  children,
  blogCategories,
  latestPosts,
}: BlogLayoutProps) {
  return (
    <main>
      <Head>
        <title>{SEO.title ? SEO.title + ' - Germanyz' : 'Germanyz'}</title>
        <meta
          name="description"
          content={SEO.title ? SEO.title + ' - Germanyz' : 'Germanyz'}
        />
        <meta
          property="og:image"
          content="https://d1ubwt7z1ubyyw.cloudfront.net/uploads/traditional-christmas-food-meta-1673594986.jpg"
        />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <div className="flex-1 container mt-12 mb-20 relative">
          <div className="lg:border-r-4 lg:mr-[320px] lg:pr-7">{children}</div>
          <BlogLayoutSideBar
            blogCategories={blogCategories}
            latestPosts={latestPosts}
          />
        </div>
        <Footer />
      </div>
    </main>
  )
}
