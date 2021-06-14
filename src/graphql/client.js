import { GraphQLClient, ClientContext } from 'graphql-hooks'

import Error from '@/src/lib/error'

import { SubscriptionClient } from 'subscriptions-transport-ws'

import memCache from 'graphql-hooks-memcache'

const graphQLClient = new GraphQLClient({
  url: process.env.GRAPHQL,
  cache: memCache(),
  subscriptionClient: process.browser ? new SubscriptionClient(process.env.WS, {
    lazy: true,
    reconnect: true
  }) : null,
  onError({ result }) {
    return <Error result={result} />
  }
})

export {
  graphQLClient, ClientContext
}