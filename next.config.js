const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  reactStrictMode: true,
  env: {
    GRAPHQL: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/graphql' : 'https://graphql-mercurius.herokuapp.com/graphql',
    WS: process.env.NODE_ENV === 'development' ? 'ws://localhost:4000/graphql' : 'wss://graphql-mercurius.herokuapp.com/graphql',
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development'
  },
  images: {
    domains: ['placekitten.com'],
  }
})
