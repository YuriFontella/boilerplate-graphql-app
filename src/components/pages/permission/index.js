import { LockClosedIcon } from '@heroicons/react/solid'

const Permission = () => {

  return (
    <div className="bg-white rounded-lg shadow-md max-w-md p-8 mx-auto">
      <div className="flex flex-col items-center space-y-3">
        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Atenção</h2>

        <LockClosedIcon className="w-1/12 h-1/12 text-gray-800" />

        <p className="text-sm text-gray-500">
          Esse usuário não tem permissão para carregar os dados dessa página, verifique a sua conta.
        </p>
      </div>
    </div>
  )
}

export default Permission