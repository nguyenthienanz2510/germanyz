import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
  typography: {
    fontFamily: [
      'Lato', 'sans-serif'
    ].join(','),
  },
  palette: {
    mode: 'light',
    text: {
      primary: '#1e2329',
    },
    background: {
      default: '#000000',
      paper: '#a84c4c',
    },
    primary: {
      main: '#FCD535',
    },
    secondary: {
      main: '#a84c4c',
    },
    error: {
      main: '#cf304a',
    },
    warning: {
      main: '#ffc107',
    },
    info: {
      main: '#17a2b8',
    },
    success: {
      main: '#03a66d',
    },
  },
})
export const darkTheme = createTheme({
  typography: {
    fontFamily: [
      'Lato', 'sans-serif'
    ].join(','),
  },
  palette: {
    mode: 'dark',
    text: {
      primary: '#EAECEF',
    },
    background: {
      default: '#ffffff',
      paper: '#a84c4c',
    },
    primary: {
      main: '#FCD535',
    },
    secondary: {
      main: '#a84c4c',
    },
    error: {
      main: '#cf304a',
    },
    warning: {
      main: '#ffc107',
    },
    info: {
      main: '#17a2b8',
    },
    success: {
      main: '#03a66d',
    },
  },
})
