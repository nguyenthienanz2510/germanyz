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
      default: '#10141c',
      paper: '#a84c4c',
    },
    primary: {
      main: '#0dabff',
    },
    secondary: {
      main: '#FF595A',
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
      primary: '#feffff',
    },
    background: {
      default: '#ffffff',
      paper: '#a84c4c',
    },
    primary: {
      main: '#0dabff',
    },
    secondary: {
      main: '#FF595A',
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
