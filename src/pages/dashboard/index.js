import Auth from '@/src/layouts/Auth'

import Can from '@/src/libs/can'

import Index from '@/src/components/pages/dashboard'
import Permission from '@/src/components/helpers/permission'

const Dashboard = () => {

  return (
    <Can
      rule="charts"
      yes={() => <Index />}

      no={() =>
        <Permission />
      }
    >
    </Can>
  )
}

Dashboard.Layout = Auth

export default Dashboard
