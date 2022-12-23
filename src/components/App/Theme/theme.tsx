import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: 'red',
      main: 'red',
      dark: 'red',
      contrastText: 'red',
    },
    secondary: {
      light: 'red',
      main: 'red',
      dark: 'blue',
      contrastText: 'red',
    },
  },
})
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {
    //   light: 'red',
    //   main: 'red',
    //   dark: 'red',
    //   contrastText: 'red',
    // },
    // secondary: {
    //   light: 'red',
    //   main: 'red',
    //   dark: 'blue',
    //   contrastText: 'red',
    // },
  },
})
