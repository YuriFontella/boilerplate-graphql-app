import Auth from '@/src/layouts/Auth'

import Can from '@/src/lib/can'

import Index from '@/src/components/pages/cats'
import Permission from '@/src/components/pages/permission'

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