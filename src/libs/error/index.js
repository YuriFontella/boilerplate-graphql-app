import { toast } from '@/src/libs/toast'

export const Error = (result) => {

  const message = (result) => {
    const [message] = result.error.graphQLErrors.map(e => ({
      message: e.message
    }))

    return message
  }

  const error = (error) => {
    toast(error.message)
  }

  if (result)
    return error(message(result))
}

export default Error