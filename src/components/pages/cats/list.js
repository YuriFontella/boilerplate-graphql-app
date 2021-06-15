import Image from 'next/image'

const List = ({ item }) => {

  return (
    <li>
      <div className="select-none cursor-pointer flex flex-row items-center py-5 px-4">
        <div className="w-10 h-10">
          <a href="#">
            <Image
              alt={item.name}
              src={item.image}
              width={75}
              height={75}
              className="rounded-full"
            />
          </a>
        </div>
        <div className="ml-4">
          <div className="font-medium dark:text-white">
            {item.name}
          </div>
          <div className="text-gray-600 dark:text-gray-200 text-sm">
            {item.owner.name}
          </div>
        </div>
        <div className="flex-1 text-right text-gray-600 dark:text-gray-200 text-xs">
          <div>{item.created_at}</div>
        </div>
      </div>
    </li>
  )
}

export default List