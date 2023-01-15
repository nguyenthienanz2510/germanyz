import { Alert, Avatar, Snackbar } from '@mui/material'
import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import MainLayout from '../components/Layout/Mainlayout'
import { useAppContext } from '../context/appContext'
import { MenuItemsDocument } from '../generated/graphql'
import client from '../lib/apolloClient'

const IndexPage: NextPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(true)
  const { state } = useAppContext()

  return (
    <MainLayout title="Homepage">
      <div className="w-10 h-10 bg-red-500 dark:bg-blue-500"></div>
      <h1 className="text-primary">Heading 1</h1>
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
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const { data, error } = await useMenuItemsQuery()
  const { data } = await client.query({
    query: MenuItemsDocument
  })
  const menuItems = data
  return {
    props: {
      data: {
        menu: menuItems,
      }
    },
  }
}

export default IndexPage
