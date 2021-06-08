
import { useStore } from '@/src/contexts/store'

import { useEffect } from 'react'

import { ToastContainer, toast } from 'react-toast'

const Error = () => {

  const { state } = useStore()

  const message = (state) => {
    const [result] = state.error.response.errors.map(e => ({
      message: e.message
    }))

    return result
  }

  const error = (error) => {
    toast.error(error.message, {
      backgroundColor: "rgba(79, 70, 229)",
      color: "#ffffff"
    })
  }

  useEffect(() => {
    if (state.error.response) {
      error(message(state))
    }
  }, [state])

  return <ToastContainer position="bottom-center" delay="4000" />

}

export default Error