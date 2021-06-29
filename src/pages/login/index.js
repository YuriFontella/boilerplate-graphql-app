import { LockClosedIcon, UserCircleIcon, BanIcon } from '@heroicons/react/solid'

import { useForm } from 'react-hook-form'

import { signIn, getCsrfToken, getSession } from 'next-auth/client'

import { useRouter } from 'next/router'

import Link from 'next/link'

const Login = () => {

  const route = useRouter()

  const { register, handleSubmit } = useForm()

  const onSubmit = (credentials) => {
    signIn('credentials', credentials)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-0">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <UserCircleIcon className="h-16 w-16 text-indigo-500" aria-hidden="true" />
          </div>

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Faça login em sua conta</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <span className="font-medium text-indigo-600 hover:text-indigo-500">
              Entre com o seu email e senha
            </span>
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm space-y-3">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="current-email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="E-mail"
                defaultValue="tara27@gmail.com"
                {...register('email')}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
                defaultValue="123456"
                {...register('password')}
              />
            </div>

            {route.query.error && <div className="flex space-x-2 items-center text-white text-sm p-3 rounded bg-red-500">
              <BanIcon className="w-5 h-5" />
              <span>
                <b className="capitalize">Atenção!</b> Usuário ou senha incorretos.
              </span>
            </div>}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Lembrar-me
              </label>
            </div>

            <div className="text-sm">
              <Link href="/">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Página inicial
                </a>
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition active:bg-indigo-400"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )

}

export async function getServerSideProps(context) {

  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: '/dashboard'
      }
    }
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  }
}

export default Login
