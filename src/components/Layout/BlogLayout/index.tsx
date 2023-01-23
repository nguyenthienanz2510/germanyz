import Head from 'next/head'
import { ReactNode } from 'react'
import { GetBlogCategoriesQuery } from '../../../generated/graphql'
import Footer from '../Footer'
import Header from '../Header'
import BlogLayoutSideBar from './SideBar'

interface BlogLayoutProps {
  title: string
  children: ReactNode
  blogCategories: GetBlogCategoriesQuery
}

export default function BlogLayout({ title, children, blogCategories }: BlogLayoutProps) {
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
          <BlogLayoutSideBar blogCategories={blogCategories}/>
          <div className="border-r-4 mr-[320px] pr-7">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  )
}
