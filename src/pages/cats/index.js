import Auth from '@/src/layouts/Auth'

import Can from '@/src/libs/can'

import Index from '@/src/components/pages/cats'
import Permission from '@/src/components/helpers/permission'

const Cats = () => {

  return (
    <Can
      rule="cats"
      yes={() => <Index />}

      no={() =>
        <Permission />
      }
    />
  )
}

Cats.Layout = Auth

export default Cats