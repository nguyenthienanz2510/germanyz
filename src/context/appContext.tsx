import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import { AppReducer, initialState } from './appReducer'

interface AppContextProps {
  state: any
  dispatch: Dispatch<SetStateAction<any>>
}

const AppContext = createContext({} as AppContextProps)
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  console.log("Global state ==>", state)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("state") || '{}')
    if (userInfo?.user) {
      console.log("get item from localStorage")
      dispatch({
        type: 'INIT_STATE',
        value: JSON.parse(localStorage.getItem("state")|| '{}'),
      })
    }
  }, [])
  useEffect(() => {
    console.log(initialState == state)
    if (state !== initialState) {
      console.log("update LocalStorage")
      localStorage.setItem("state", JSON.stringify(state))
    }
  }, [state])

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
export function useAppContext() {
  return useContext(AppContext)
}
