import { GetServerSideProps } from 'next'
import { styled } from 'twin.macro'
import BlogLayout from '../../components/Layout/BlogLayout'
import {
  GetBlogCategoriesDocument,
  GetBlogCategoriesQuery,
  GetPostByIdDocument,
  GetPostByIdQuery,
  GetPostsDocument,
  GetPostsQuery,
} from '../../generated/graphql'
import client from '../../lib/apolloClient'
import { sanitize } from '../../utils/miscellaneous'

interface PostDetailProps {
  data: GetPostByIdQuery
  blogCategories: GetBlogCategoriesQuery
  latestPosts: GetPostsQuery
}

const PostDetail = ({ data, blogCategories, latestPosts }: PostDetailProps) => {
  console.log(data.post?.featuredImage?.node.mediaItemUrl || undefined)
  return (
    <BlogLayout
      SEO={{
        title: data?.post?.title || 'Post',
        description: data?.post?.title || 'Post',
        metaImage: data.post?.featuredImage?.node.mediaItemUrl || undefined
      }}
      blogCategories={blogCategories}
      latestPosts={latestPosts}
    >
      <h1 className='mb-5'>{data?.post?.title}</h1>
      <BlogDetailBody
        className="px-3 sm:px-0"
        dangerouslySetInnerHTML={{
          __html: sanitize(data?.post?.content ?? {}),
        }}
      />
    </BlogLayout>
  )
}

export default PostDetail

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context || {}
  const { data } = await client.query({
    query: GetPostByIdDocument,
    variables: {
      id: Number(query?.id ?? ''),
    },
  })

  const { data: blogCategories } = await client.query({
    query: GetBlogCategoriesDocument,
  })

  const { data: latestPosts } = await client.query({
    query: GetPostsDocument,
    variables: {
      quantity: 5,
    },
  })

  return {
    props: {
      data: data || {},
      blogCategories: blogCategories,
      latestPosts: latestPosts,
    },
  }
}

const BlogDetailBody = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: 16px;
  }
`
