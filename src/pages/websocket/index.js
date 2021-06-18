import Auth from '@/src/layouts/Auth'

import { SUB_NOTIFICATION } from '@/src/graphql/queries'

import { useState } from 'react'

import { useSubscription } from 'graphql-hooks'

const Websocket = () => {

  const [data, setData] = useState()

  useSubscription({ query: SUB_NOTIFICATION }, ({ data }) => {
    console.log(data)
    setData(data)
  })

  return (
    <div className="px-8">
      Abra uma outra aba do navegador e entre na página dos usuários e observe aqui.
      <div>
        {data?.notification.message}
      </div>
    </div>
  )
}

Websocket.Layout = Auth

export default Websocket