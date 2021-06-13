import Link from 'next/link'

import { signOut, useSession } from 'next-auth/client'

import { LogoutIcon, PuzzleIcon } from '@heroicons/react/solid'

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Usuários', href: '/users' },
  { name: 'Gatos', href: '/cats' },
  { name: 'Websocket', href: '/websocket' },
  { name: 'About', href: '/about' }
]

const Private = ({ children }) => {

  const [session] = useSession()

  return (
    <main>
      <nav className="absolute w-full bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <PuzzleIcon className="h-8 w-auto text-indigo-400" />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item, index) => (
                    <Link key={index} href={item.href}>
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex space-x-8 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="text-gray-300 text-sm font-medium">
                {session.name}
              </div>
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-label="logout" onClick={() => signOut({ redirect: true, callbackUrl: '/' })}>
                <LogoutIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-gray-200 w-full min-h-screen py-24">
        {children}
      </section>
    </main>

  )
}

export default Private
