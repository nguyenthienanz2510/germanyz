// import { GET_PAGE_BY_ID } from '../queries/pages/get-page'
// import { v4 } from 'uuid'
import client from '../lib/apolloClient'
import {
  LoginDocument,
  LoginInput,
  useLoginMutation,
} from '../generated/graphql'

// export async function getPreviewPage(id) {
//   const { data, errors } = await client.query({
//     query: GET_PAGE_BY_ID,
//     variables: {
//       id: Number(id),
//     },
//   })

//   return data || {}
// }

export async function loginUser({ username, password }: any) {
  try {
    const { data, errors } = await client.mutate({
      mutation: LoginDocument,
      variables: {
        loginInput: {
          // clientMutationId: v4(), // Generate a unique id
          username: username || '',
          password: password || '',
        },
      },
    })
    return data || {}
  } catch (err) {
    console.log(err)
    return(err)
  }
}
