import { GET_CATS } from '@/src/graphql/queries'

import Loader from '@/src/libs/loader'

import List from '@/src/components/pages/cats/list'
import Section from '@/src/components/pages/cats/section'

import { useQuery } from 'graphql-hooks'

const Cats = () => {

  const { loading, data } = useQuery(GET_CATS)

  return (
    <Section>
      <Loader
        source={data?.cats}
        loading={loading}
        component={(item, index) =>
          <List item={item} key={index} />
        }
      />

    </Section>
  )
}

export default Cats
