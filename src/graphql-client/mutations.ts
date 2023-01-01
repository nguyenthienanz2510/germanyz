import { gql } from '@apollo/client'

export const loginMutation = gql`
  mutation Login($loginInput: LoginInput!) {
    login(
      input: $loginInput
    ) {
      authToken
      refreshToken
      user {
        email
        avatar {
          url
        }
      }
    }
  }
`
