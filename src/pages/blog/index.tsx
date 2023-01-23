import { GetStaticProps, NextPage } from 'next'
import BlogCategories from '../../components/Blog/BlogCategoryBlock'
import BlogLayout from '../../components/Layout/BlogLayout'
import NewPostsContainer from '../../components/MainContent/NewPostsContainer'
import {
  GetBlogCategoriesDocument,
  GetPostsDocument
} from '../../generated/graphql'
import client from '../../lib/apolloClient'

const Blog: NextPage = ({ data }: any) => {
  return (
    <BlogLayout title="Blog" blogCategories={data?.blogCategories}>
        <NewPostsContainer newPosts={data?.newPosts} />
        <BlogCategories blogCategories={data?.blogCategories} />
    </BlogLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  const { data: newPosts } = await client.query({
    query: GetPostsDocument,
    variables: {
      quantity: 3,
    },
  })

  const { data: blogCategories } = await client.query({
    query: GetBlogCategoriesDocument,
  })

  return {
    props: {
      data: {
        newPosts,
        blogCategories,
      },
    },
    revalidate: 1,
  }
}

export default Blog
