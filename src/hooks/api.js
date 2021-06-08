import { GraphQLClient } from 'graphql-request'

import { useSession } from 'next-auth/client'

import { useStore } from '@/src/contexts/store'

import useSWR from 'swr'

const graphQLClient = (session) => {

  const client = new GraphQLClient(process.env.GRAPHQL)

  if (session)
    client.setHeader('x-access-token', session.access_token)

  return client
}

const http = () => {

  const [session] = useSession()

  const { dispatch } = useStore()

  const api = async (query, variables) => {

    const client = graphQLClient(session)

    try {

      if (session)
        return await client.request(query, variables)

    } catch (error) {

      dispatch({ type: 'error', error: error })

      throw new Error(error)
    }
  }

  return api
}

const swr = (key, query, variables = {}, options = {}) => {

  const api = http()

  const { data, error } = useSWR(key, () => api(query, variables), options)

  return {
    data: data,
    loading: !error && !data
  }
}

export { swr, graphQLClient }