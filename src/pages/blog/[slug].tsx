import { GetServerSideProps } from "next"
import { styled } from "twin.macro"
import BlogLayout from "../../components/Layout/BlogLayout"
import { GetBlogCategoriesDocument, GetBlogCategoriesQuery, GetPostByIdDocument, GetPostByIdQuery } from "../../generated/graphql"
import client from "../../lib/apolloClient"
import { sanitize } from "../../utils/miscellaneous"

interface PostDetail {
  data: GetPostByIdQuery
  blogCategories: GetBlogCategoriesQuery
}

const PostDetail = ({ data, blogCategories }: any) => {
  console.log(data)
  return (
    <BlogLayout blogCategories={blogCategories} title={data?.post?.title}>
      <BlogDetailBody
        dangerouslySetInnerHTML={{
          __html: sanitize(data?.post?.content ?? {}),
        }}
      />
    </BlogLayout>
  )
}

export default PostDetail

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context || {}
  const { data } = await client.query({
    query: GetPostByIdDocument,
    variables: {
      id: Number(query?.id ?? ''),
    }
  })

  const { data: blogCategories } = await client.query({
    query: GetBlogCategoriesDocument,
  })

  return {
    props: {
      data: data || {},
      blogCategories: blogCategories
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
