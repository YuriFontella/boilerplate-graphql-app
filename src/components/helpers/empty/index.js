import { EmojiSadIcon } from '@heroicons/react/solid'

const Empty = () => {

  return (
    <div className="p-8">
      <div className="flex flex-col items-center space-y-3">
        <EmojiSadIcon className="w-1/12 h-1/12 text-gray-800" />
      </div>
    </div>
  )
}

export default Empty
