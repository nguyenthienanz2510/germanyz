import { GetServerSideProps } from "next"
import MainLayout from "../../components/Layout/MainLayout"
import { GetPostByIdDocument } from "../../generated/graphql"
import client from "../../lib/apolloClient"
import { sanitize } from "../../utils/miscellaneous"


const PostPreview = ({ data }: any) => {
  console.log(data)
  return (
    <MainLayout title="Blog preview">
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(data?.post?.content ?? {}),
        }}
      />
    </MainLayout>
  )
}

export default PostPreview

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context || {}
  const { data } = await client.query({
    query: GetPostByIdDocument,
    variables: {
      id: Number(query?.id ?? ''),
    }
  })

  return {
    props: {
      data: data || {},
    },
  }
}
