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

export const SUB_NOTIFICATION = `
  subscription {
    notification {
      message
    }
  }
`

export const LOGIN = `
  mutation auth($email: String!, $password: String!) {
    auth: login(email: $email, password: $password) {
      token
      user {
        name
        role
      }
    }
  }
`