import { EmojiSadIcon } from '@heroicons/react/solid'

const NoResults = () => {

  return (
    <div className="p-8">
      <div className="flex flex-col items-center space-y-3">
        <EmojiSadIcon className="w-1/12 h-1/12 text-gray-800" />

        <p className="text-sm text-gray-500">
          Nenhum resultado encontrado!
        </p>
      </div>
    </div>
  )
}

export default NoResults