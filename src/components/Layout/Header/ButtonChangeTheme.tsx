import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton } from '@mui/material'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ButtonChangeTheme = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
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
    </div>
  )
}

export default ButtonChangeTheme
