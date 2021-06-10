export const GET_CATS = `
  query {
    cats {
      name
      image
      created_at
      owner {
        name
      }
    }
  }
`

export const GET_USERS = `
  query {
    users {
      name
      role
      email
      status
      created_at
    }
  }
`

export const GET_COUNTERS = `
  query {
    counters {
      users
      cats
    }
  }
`