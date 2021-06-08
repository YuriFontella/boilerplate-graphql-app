import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/solid'

import Router from 'next/router'

export default function Example() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog
      as="div"
      static
      className="fixed z-10 inset-x-0 overflow-y-auto bg-gray-200"
      initialFocus={true}
      open={open}
      onClose={setOpen}
    >
      <div className="flex items-center justify-center min-h-screen text-center sm:block sm:pt-40 md:pt-40">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                  Você não está logado
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Essa página é privada, para acessar todos os recursos e conteúdos, você deve fazer o log in com sua conta de e-mail.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => Router.push('/login')}
            >
              Log In
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => Router.push('/')}
            >
              Página inicial
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
