import Auth from '@/src/layouts/Auth'

import { toast } from '@/src/libs/toast'

const Index = () => {

  return (
    <div>
      <div className="flex mx-14">
        <button onClick={() => toast('Hello, eu sou um toast e vou desaparecer!')} className="bg-indigo-500 py-2 px-4 text-white rounded-sm">
          Abrir
        </button>
      </div>
    </div>
  )
}

Index.Layout = Auth

export default Index






