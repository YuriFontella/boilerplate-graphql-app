import mutations from '@/src/libs/store/mutations'

import { createContext, useContext, useReducer } from 'react'

const initial = {
  error: {}
}

export const Store = createContext(initial)

const StoreProvider = ({ children }) => {

  const [state, dispatch] = useReducer(mutations, initial)

  return (
    <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  )
}

export const useStore = () => {

  return useContext(Store)
}

export default StoreProvider
