import Link from 'next/link'

import { signOut, useSession } from 'next-auth/client'

import { XCircleIcon, PuzzleIcon } from '@heroicons/react/solid'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Usuários', href: '/users' },
  { name: 'Gatos', href: '/cats' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Private = ({ children }) => {

  const [session] = useSession()

  return (
    <main>
      <Disclosure as="nav" className="bg-gray-800 absolute w-full">
        {({ open }) => (
          <Fragment>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <PuzzleIcon className="h-8 w-auto text-indigo-500" />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item, index) => (
                        <Link key={index} href={item.href}>
                          <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute space-x-4 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="text-gray-300 text-sm font-medium hidden sm:block">
                    {session.name}
                  </div>
                  <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-label="Logout" onClick={() => signOut({ redirect: true, callbackUrl: '/' })}>
                    <XCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </Fragment>
        )}
      </Disclosure>

      <section className="bg-gray-200 w-full min-h-screen py-24">
        {children}
      </section>
    </main>

  )
}

export default Private
