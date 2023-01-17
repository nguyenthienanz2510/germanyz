import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { ThemeProvider as StyledComponentsTheme } from 'styled-components'
import { useTheme } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'
import { darkTheme, lightTheme } from './theme'
import { styledComponentTheme } from './styledComponentTheme'
interface PageProviderProps {
  children: ReactNode
}

const PageProvider = ({ children }: PageProviderProps) => {
  const { theme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState(darkTheme)
  useEffect(() => {
    theme === 'light' ? setCurrentTheme(lightTheme) : setCurrentTheme(darkTheme)
  }, [theme])
  return (
    <MuiThemeProvider theme={currentTheme}>
      <StyledComponentsTheme theme={styledComponentTheme}>
        {children}
      </StyledComponentsTheme>
    </MuiThemeProvider>
  )
}
export default PageProvider
