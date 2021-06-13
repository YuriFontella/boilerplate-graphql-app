import Auth from '@/src/layouts/Auth'

import { SUB_NOTIFICATION } from '@/src/graphql/queries'

import { SubscriptionClient } from 'graphql-subscriptions-client'

import { useEffect, useState } from 'react'

const Websocket = () => {

  const query = SUB_NOTIFICATION

  const [data, setData] = useState()

  useEffect(() => {

    const client = new SubscriptionClient(process.env.WS, {
      reconnect: true,
      lazy: true
    })

    client.request({ query })
      .subscribe({
        next({ data }) {
          if (data) {
            console.log('Notification:', data.notification)
            setData(data)
          }
        }
      })

    return () => {
      client.close()
    }
  })

  return (
    <div className="px-8">
      Abra uma outra aba do navegador e entre na página dos usuários e observe aqui.
      {data?.notification && <div className="p-3 bg-white rounded-lg w-52 shadow-lg mt-2">{data.notification.message}</div>}
    </div>
  )
}

Websocket.Layout = Auth

export default Websocket