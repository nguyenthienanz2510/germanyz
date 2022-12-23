import { ThemeProvider } from '@mui/material'
import { useTheme } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'
import { darkTheme, lightTheme } from './theme'

interface PageProviderProps {
  children: ReactNode
}

interface PageProviderProps {
  children: ReactNode
}
const PageProvider = ({ children }: PageProviderProps) => {
  const { theme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState(darkTheme)
  useEffect(() => {
    theme === 'light' ? setCurrentTheme(lightTheme) : setCurrentTheme(darkTheme)
  }, [theme])
  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}
export default PageProvider
