import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_WP_SITE_URL}/graphql`,
    cache: new InMemoryCache(),
    connectToDevTools: true,
    // credentials: 'include',
});

export default client;