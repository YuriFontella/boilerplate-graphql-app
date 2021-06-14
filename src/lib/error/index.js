import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toast'

const Error = ({ result }) => {

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

  useEffect(() => {
    if (result)
      error(message(result))

  }, [result])

  return <ToastContainer position="bottom-center" />

}

export default Error