import { GetStaticProps, NextPage } from 'next'
import BlogCategories from '../../components/Blog/BlogCategoryBlock'
import BlogLayout from '../../components/Layout/BlogLayout'
import LatestPostsContainer from '../../components/MainContent/LatestPostsContainer'
import {
  GetBlogCategoriesDocument,
  GetPostsDocument
} from '../../generated/graphql'
import client from '../../lib/apolloClient'

const Blog: NextPage = ({ data }: any) => {
  return (
    <BlogLayout title="Blog" blogCategories={data?.blogCategories} latestPosts={data?.latestPosts}>
        <LatestPostsContainer latestPosts={data?.latestPosts} />
        <BlogCategories blogCategories={data?.blogCategories} />
    </BlogLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  const { data: latestPosts} = await client.query({
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
      data: {
        latestPosts,
        blogCategories,
      },
    },
    revalidate: 1,
  }
}

export default Blog
