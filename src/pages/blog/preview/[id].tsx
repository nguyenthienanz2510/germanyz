// import { GetServerSideProps } from 'next'
// import { getAuthToken } from '../../../utils/cookies'
// import client from '../../../lib/apolloClient'
// import { GetPostByIdDocument } from '../../../generated/graphql'
// import { getLoginPreviewRedirectUrl } from '../../../utils/redirects'
// import { handleRedirectsAndReturnData } from '../../../utils/slug'
// import { sanitize } from '../../../utils/miscellaneous'
// import MainLayout from '../../../components/Layout/MainLayout'

const PostPreview = () => {
  return (
    <div>Page does not exist</div>
    // <MainLayout title="Blog preview">
    //   <div
    //     dangerouslySetInnerHTML={{
    //       __html: sanitize(data?.post?.content ?? {}),
    //     }}
    //   />
    // </MainLayout>
  )
}

export default PostPreview

// export const getServerSideProps: GetServerSideProps = async context => {
//   const authToken = getAuthToken(context.req)

//   const { params } = context || {}
//   const { data, errors } = await client.query({
//     query: GetPostByIdDocument,
//     variables: {
//       id: Number(params?.id ?? ''),
//     },
//     context: {
//       headers: {
//         authorization: authToken ? `Bearer ${authToken}` : '',
//       },
//     },
//   })

//   const defaultProps = {
//     props: {
//       data: data || {},
//     },
//   }

//   const loginRedirectURL = getLoginPreviewRedirectUrl('post', params?.id ?? '')

//   return handleRedirectsAndReturnData(
//     defaultProps,
//     data,
//     errors,
//     'post',
//     true,
//     loginRedirectURL,
//   )
// }
