import Auth from '@/src/layouts/Auth'

import { graphQLClient } from '@/src/hooks/api'

import { GET_USERS } from '@/src/graphql/queries'

import { getSession } from 'next-auth/client'

import Index from '@/src/components/users/index'

const Users = ({ data }) => {

  return <Index data={data} />
}

export async function getServerSideProps({ req }) {

  const session = await getSession({ req })

  if (session) {

    const data = await graphQLClient(session).request(GET_USERS)

    return {
      props: { data }
    }

  }

  return {
    props: {}
  }

}

Users.Layout = Auth

export default Users
