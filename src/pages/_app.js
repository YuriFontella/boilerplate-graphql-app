import '@/src/styles/globals.css'

import { Fragment } from 'react'

import { Provider } from 'next-auth/client'

import NProgress from 'nprogress'

import Head from 'next/head'

import Router from 'next/router'

import StoreProvider from '@/src/contexts/store'

import { graphQLClient, ClientContext } from '@/src/graphql/client'

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

        <ClientContext.Provider value={graphQLClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ClientContext.Provider>
      </StoreProvider>
    </Provider>
  )
}

export default App
