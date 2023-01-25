import { useTheme } from 'next-themes'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton } from '@mui/material'

const ButtonChangeTheme = () => {
  const { theme, setTheme } = useTheme()
  return (
    <>
      {theme == 'dark' ? (
        <IconButton
          className="cursor-pointer"
          onClick={() => {
            setTheme('light')
          }}
        >
          <LightModeIcon className="text-color-text-light hover:text-color-primary" />
        </IconButton>
      ) : (
        <IconButton
          className="cursor-pointer"
          onClick={() => {
            setTheme('dark')
          }}
        >
          <DarkModeIcon className="text-color-text-dark hover:text-color-primary" />
        </IconButton>
      )}
    </>
  )
}

export default ButtonChangeTheme
