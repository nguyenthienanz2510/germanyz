import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_WP_SITE_URL}/graphql`,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            keyArgs: false,
            merge(existing, incoming) {
              let paginatedPosts: any = []

              if (existing && existing.edges) {
                paginatedPosts = paginatedPosts.concat(
                  existing.edges
                )
              }

              if (incoming && incoming.edges) {
                paginatedPosts = paginatedPosts.concat(
                  incoming.edges
                )
              }

              console.log(paginatedPosts.length)

              return { ...incoming, edges: paginatedPosts }
            }
          }
        }
      }
    }
  }),
  connectToDevTools: true,
  // credentials: 'include',
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
})

export default client
