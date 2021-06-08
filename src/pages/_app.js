import '@/src/styles/globals.css'

import { Fragment } from 'react'

import { Provider } from 'next-auth/client'

import NProgress from 'nprogress'

import Head from 'next/head'

import Router from 'next/router'

import StoreProvider from '@/src/contexts/store'

import Error from '@/src/libs/error'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }) => {

  const Layout = Component.Layout ? Component.Layout : Fragment

  return (
    <Provider session={pageProps.session}>
      <StoreProvider>
        <Head>
          <title>Boilerplate</title>
        </Head>

        <Layout>
          <Component {...pageProps} />
          <Error />
        </Layout>
      </StoreProvider>
    </Provider>
  )
}

export default App
