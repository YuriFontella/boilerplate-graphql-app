/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'

import { AnnotationIcon, BeakerIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, MenuIcon, XIcon, PuzzleIcon } from '@heroicons/react/solid'

import { Popover, Transition } from '@headlessui/react'

import Link from 'next/link'

const features = [
  {
    name: 'Um conjunto de utilitários',
    description:
      'Carregue arquivos e faça o merge automaticamente de vários schemas e resolvers de uma forma simples, rápida e poderosa com o graphql tools.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Escudo de proteção',
    description:
      'Mecanismo de permissões em cada solicitação com cache inteligente, você pode ter certeza de que nenhum dado interno será exposto.',
    icon: ScaleIcon,
  },
  {
    name: 'Provedores de autenticação',
    description:
      'A inscrição com um clique usando Google, Facebook ou qualquer outro provedor é um recurso desejável para a maioria dos aplicativos da web.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Estilizando a aplicação',
    description:
      'Criado em 2017, Tailwind tem a proposta de fornecer as ferramentas, que eles chamam de utility classes, para você criar seus componentes.',
    icon: AnnotationIcon,
  },
]

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Graphql', href: 'https://github.com/YuriFontella/boilerplate-graphql-api' },
  { name: 'Nextjs', href: 'https://github.com/YuriFontella/boilerplate-graphql-app' },
  { name: 'Tailwindcss', href: 'https://tailwindui.com/preview' }
]

const Index = () => {

  return (
    <div>
      <div className="relative bg-white overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <Popover>
              {({ open }) => (
                <>
                  <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav
                      className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                      aria-label="Global"
                    >
                      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                          <Link href="/">
                            <a>
                              <PuzzleIcon className="h-8 w-auto sm:h-10 text-indigo-600" />
                            </a>
                          </Link>
                          <div className="-mr-2 flex items-center md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.map((item, index) => (
                          <Link key={index} href={item.href}>
                            <a className="font-medium text-gray-500 hover:text-gray-900">
                              {item.name}
                            </a>
                          </Link>
                        ))}
                        <Link className="block" href="/login">
                          <a rel="noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Log in
                          </a>
                        </Link>
                      </div>
                    </nav>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      static
                      className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                          <div>
                            <PuzzleIcon className="h-8 w-auto sm:h-10 text-indigo-600" />
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                          {navigation.map((item, index) => (
                            <Link key={index} href={item.href}>
                              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                {item.name}
                              </a>
                            </Link>
                          ))}
                        </div>
                        <Link href="/login">
                          <a className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                            Log in
                          </a>
                        </Link>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <main className="mt-10 max-w-4xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center md:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Boilerplate utilizando</span>{' '}
                  <span className="block text-indigo-600 xl:inline">graphql e nextjs</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Graphql é considerada uma alternativa para arquiteturas REST, além de oferecer um serviço runtime para rodar comandos e consumir dados. O Next.JS permite funcionalidades como renderização do lado do servidor e geração de sites estáticos.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      rel="noreferrer"
                      href="https://github.com/YuriFontella/boilerplate-graphql-app"
                      target="_blank"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Ver o projeto
                  </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/login">
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                        Log In
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>

            <div className="absolute right-4 top-40 hidden lg:block">
              <BeakerIcon className="text-indigo-600 w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-100 mx-auto">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="md:text-center lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Tecnologias</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frontend e Backend
          </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Apesar de suas diferenças, os desenvolvedores de frontend e backend trabalham juntos e se completam na maioria dos casos.
          </p>
          </div>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
        <a rel="noreferrer" href="https://www.facebook.com/yuri.cazzeri/" target="_blank">
          <svg width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
            </path>
          </svg>
        </a>
        <a rel="noreferrer" href="https://twitter.com/YuriCazzeri" target="_blank">
          <svg width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
            </path>
          </svg>
        </a>
        <a rel="noreferrer" href="https://github.com/YuriFontella" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
            <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
            </path>
          </svg>
        </a>
        <a rel="noreferrer" href="https://www.linkedin.com/in/yurifontella/" target="_blank">
          <svg width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
            </path>
          </svg>
        </a>
      </div>
      <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center mb-8">
        Desenvolvido por Yuri Fontella
      </div>
    </div>
  )
}

export default Index