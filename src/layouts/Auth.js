import { useSession } from 'next-auth/client'

import Unauthorized from '@/src/components/layouts/unauthorized'

import Private from '@/src/layouts/Private'

import { graphQLClient } from '@/src/graphql/client'

const Auth = ({ children }) => {

  const [session, loading] = useSession()

  if (loading)
    return null

  else if (!session)
    return <Unauthorized />

  graphQLClient.setHeader('x-access-token', session.access_token)

  return <Private>{children}</Private>
}

export default Auth
