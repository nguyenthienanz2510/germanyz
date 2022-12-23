import { useTheme } from 'next-themes'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import tw from 'twin.macro'
import { IconButton } from '@mui/material'

const ButtonChangeTheme = () => {
  const { theme, setTheme } = useTheme()
  return (
    <>
      {theme == 'light' ? (
        <IconButtonStyle
          onClick={() => {
            setTheme('dark')
            // window.location.reload()
          }}
        >
          <DarkModeIconStyle />
        </IconButtonStyle>
      ) : (
        <IconButtonStyle
          onClick={() => {
            setTheme('light')
            // window.location.reload()
          }}
        >
          <LightModeIconStyle />
        </IconButtonStyle>
      )}
    </>
  )
}

export default ButtonChangeTheme

const IconButtonStyle = tw(IconButton)`
  cursor-pointer
`

const LightModeIconStyle = tw(LightModeIcon)`
  text-color-white
`

const DarkModeIconStyle = tw(DarkModeIcon)`
  text-color-black
`
