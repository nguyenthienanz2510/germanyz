import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

interface ContextProps {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

const Context = createContext({} as ContextProps)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <Context.Provider value={{ loading, setLoading }}>
      {children}
    </Context.Provider>
  )
}

export function useLoadingContext() {
  return useContext(Context)
}
