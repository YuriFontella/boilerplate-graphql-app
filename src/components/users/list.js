const Index = ({ item }) => {

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="text-sm font-medium text-gray-900">{item.name}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{item.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`${item.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}>
          {item.status ? 'Ativo' : 'Inativo'}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.role}</td>
    </tr>
  )
}

export default Index