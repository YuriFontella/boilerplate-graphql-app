import { GraphQLClient, ClientContext } from 'graphql-hooks'

import memCache from 'graphql-hooks-memcache'

const graphQLClient = new GraphQLClient({
  url: process.env.GRAPHQL,
  cache: memCache()
})

export {
  graphQLClient, ClientContext
}