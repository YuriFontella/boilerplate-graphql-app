import { useSession } from 'next-auth/client'

import Unauthorized from '@/src/components/layouts/unauthorized'

import Private from '@/src/layouts/Private'

import { GraphQLClient, ClientContext } from 'graphql-hooks'

import memCache from 'graphql-hooks-memcache'

const Auth = ({ children }) => {

  const [session, loading] = useSession()

  if (loading)
    return null

  else if (!session)
    return <Unauthorized />

  const client = new GraphQLClient({
    url: process.env.GRAPHQL,
    cache: memCache(),
    headers: {
      'x-access-token': session.access_token
    },
    onError({ operation, result }) {
      if (result)
        console.log(result)
    }
  })

  return (
    <ClientContext.Provider value={client}>
      <Private>{children}</Private>
    </ClientContext.Provider>
  )
}

export default Auth
