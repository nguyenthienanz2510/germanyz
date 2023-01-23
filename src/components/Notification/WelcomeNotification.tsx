import { Alert, Snackbar } from '@mui/material'
import { NextPage } from 'next'
import { useState } from 'react'

const WelcomeNotification: NextPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(true)

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={5000}
      onClose={() => {
        setOpenSnackbar(false)
      }}
    >
      {
        <Alert
          onClose={() => {
            setOpenSnackbar(false)
          }}
          severity="success"
          sx={{ width: '100%' }}
        >
          Welcome to Germanyz !!!
        </Alert>
      }
    </Snackbar>
  )
}

export default WelcomeNotification
