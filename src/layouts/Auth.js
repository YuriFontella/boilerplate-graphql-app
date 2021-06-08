import { useSession } from 'next-auth/client'

import Unauthorized from '@/src/components/unauthorized'

import Private from '@/src/layouts/Private'

const Auth = ({ children }) => {

  const [session, loading] = useSession()

  if (loading)
    return null

  else if (!session)
    return <Unauthorized />

  return <Private>{children}</Private>
}

export default Auth
