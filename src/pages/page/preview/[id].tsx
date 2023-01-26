// import { GetServerSideProps } from 'next'
// import MainLayout from '../../../components/Layout/MainLayout'
// import { GetPageByIdDocument } from '../../../generated/graphql'
// import client from '../../../lib/apolloClient'
// import { getAuthToken } from '../../../utils/cookies'
// import { sanitize } from '../../../utils/miscellaneous'
// import { getLoginPreviewRedirectUrl } from '../../../utils/redirects'
// import { handleRedirectsAndReturnData } from '../../../utils/slug'

const PagePreview = () => {
  return (
    <div>Page does not exist</div>
    // <MainLayout title="Post preview">
    //   <div
    //     dangerouslySetInnerHTML={{
    //       __html: sanitize(data?.page?.content ?? 'Nothing to preview'),
    //     }}
    //   />
    // </MainLayout>
  )
}

export default PagePreview

// export const getServerSideProps: GetServerSideProps = async context => {
//   const authToken = getAuthToken(context.req)

//   const { params } = context || {}
//   const { data, errors } = await client.query({
//     query: GetPageByIdDocument,
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

//   const loginRedirectURL = getLoginPreviewRedirectUrl('page', params?.id ?? '')

//   return handleRedirectsAndReturnData(
//     defaultProps,
//     data,
//     errors,
//     'page',
//     true,
//     loginRedirectURL,
//   )
// }
