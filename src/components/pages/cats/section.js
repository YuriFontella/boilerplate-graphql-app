const Section = ({ children }) => {

  return (
    <section className="flex flex-col mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="px-4 py-5 border-b w-full">
        <h3 className="text-md leading-6 font-medium text-gray-900 dark:text-white">
          Gatos disponíveis
        </h3>
        <p className="mt-1 max-w-2xl text-xs text-gray-500 dark:text-gray-200">
          Detalhes e informações sobre os gatos
        </p>
      </div>
      <ul className="divide divide-y">
        {children}
      </ul>
    </section>
  )
}

export default Section