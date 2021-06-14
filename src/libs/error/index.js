import { toast } from 'react-toast'

export const Error = (result) => {

  const message = (result) => {
    const [message] = result.error.graphQLErrors.map(e => ({
      message: e.message
    }))

    return message
  }

  const error = (error) => {
    toast.error(error.message, {
      backgroundColor: "rgba(79, 70, 229)"
    })
  }

  if (result)
    return error(message(result))
}

export default Error