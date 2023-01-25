import { GetStaticProps } from 'next'
import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import LatestPostsContainer from '../components/MainContent/LatestPostsContainer'
import WelcomeNotification from '../components/Notification/WelcomeNotification'
import {
  GetBlogCategoriesDocument,
  GetBlogCategoriesQuery,
  GetPostsDocument,
  GetPostsQuery
} from '../generated/graphql'
import client from '../lib/apolloClient'

interface IndexPageProps {
  latestPosts: GetPostsQuery
  blogCategories: GetBlogCategoriesQuery
}

const IndexPage: React.FC<IndexPageProps> = ({
  latestPosts,
  blogCategories,
}) => {

  return (
    <MainLayout
      latestPosts={latestPosts}
      blogCategories={blogCategories}
      title="Home"
    >
      <LatestPostsContainer latestPosts={latestPosts} />

      <WelcomeNotification />

    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: latestPosts } = await client.query({
    query: GetPostsDocument,
    variables: {
      quantity: 5,
    },
  })

  const { data: blogCategories } = await client.query({
    query: GetBlogCategoriesDocument,
  })

  return {
    props: {
      latestPosts,
      blogCategories,
    },
    revalidate: 1,
  }
}

export default IndexPage
