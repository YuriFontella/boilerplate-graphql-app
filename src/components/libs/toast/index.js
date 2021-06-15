import { FireIcon } from '@heroicons/react/solid'

const Toast = ({ message }) => {

  return (
    <div className="fixed flex items-end justify-center w-full bottom-2 transition duration-300">
      <div className="flex z-50 space-x-3 text-white text-sm p-4 rounded shadow-xl bg-indigo-500">
        <span>
          <FireIcon className="h-5 w-5" />
        </span>
        <span>
          <p className="font-medium">{message}</p>
        </span>
      </div>
    </div>
  )
}

export default Toast
