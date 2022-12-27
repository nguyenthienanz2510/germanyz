import { NextPage } from 'next'
import { Alert, Avatar, Snackbar } from '@mui/material'
import MainLayout from '../components/Layout/Mainlayout'
import { useState } from 'react'
import { useAppContext } from '../context/appContext'

const IndexPage: NextPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(true)
  const { state } = useAppContext()

  return (
    <MainLayout title="Homepage">
      <div className="w-10 h-10 bg-red-500 dark:bg-blue-500"></div>
      <h1 className="text-primary">Heading 1</h1>
      <h2>Heading 2</h2>
      <div className="flex justify-center items-center">
        <Avatar>H</Avatar>
        <Avatar>N</Avatar>
        <Avatar>OP</Avatar>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={7000}
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
            </span> !!!
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
    </MainLayout>
  )
}

export default IndexPage
