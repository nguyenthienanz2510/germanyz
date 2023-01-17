import { Alert, Snackbar } from '@mui/material'
import { NextPage } from 'next'
import { useState } from 'react'
import { useAppContext } from '../../context/appContext'

const WelcomeNotification: NextPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(true)
  const { state } = useAppContext()

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={5000}
      onClose={() => {
        setOpenSnackbar(false)
      }}
    >
      {state.user?.user_display_name ? (
        <Alert
          onClose={() => {
            setOpenSnackbar(false)
          }}
          severity="success"
          sx={{ width: '100%' }}
        >
          Welcome to Germanyz,{' '}
          <span className="font-bold capitalize">
            {state.user?.user_display_name}
          </span>{' '}
          !!!
        </Alert>
      ) : (
        <Alert
          onClose={() => {
            setOpenSnackbar(false)
          }}
          severity="success"
          sx={{ width: '100%' }}
        >
          Welcome to Germanyz !!!
        </Alert>
      )}
    </Snackbar>
  )
}

export default WelcomeNotification
