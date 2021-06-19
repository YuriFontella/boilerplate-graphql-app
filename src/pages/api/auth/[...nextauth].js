import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { request } from 'graphql-request'

import LOGIN from '@/src/graphql/queries'

export default NextAuth({
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
      state: false
    }),

    Providers.Credentials({
      name: 'Credentials',
      authorize: async ({ email, password }) => {

        try {

          const response = await request(process.env.GRAPHQL, LOGIN, { email, password })

          if (response.auth.user)
            return response.auth

        } catch (e) {

          throw '/login?error=true'
        }
      }
    })
  ],

  debug: false,

  callbacks: {

    jwt: async (token, response, account) => {

      const isSignIn = (response) ? true : false

      if (isSignIn) {
        if (account.type === 'credentials') {

          token.access_token = response.token
          token.role = response.user.role
          token.name = response.user.name
        }

        else {
          token.access_token = true
        }
      }

      return token

    },
    session: async (session, token) => {

      session.access_token = token.access_token
      session.role = token.role
      session.name = token.name

      return session
    },
    signIn: async (user, account) => {
      if (user)
        return true
      else
        throw '/login?status=true'
    }
  },
  session: {
    jwt: true
  }
})
