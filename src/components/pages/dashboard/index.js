import { swr } from '@/src/hooks/api'

import { GET_COUNTERS } from '@/src/graphql/queries'

import ChartPie from '@/src/components/pages/dashboard/chartpie'

import Loader from '@/src/libs/loader'

const Index = () => {

  const { data, loading } = swr('dashboard', GET_COUNTERS)

  return (
    <Loader
      source={data?.counters}
      loading={loading}
      component={(item) => <ChartPie item={item} />}
    />
  )
}

export default Index
