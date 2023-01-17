import { Alert, Avatar, Snackbar } from '@mui/material'
import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import MainLayout from '../components/Layout/Mainlayout'
import { useAppContext } from '../context/appContext'
import { useLoadingContext } from '../context/loading'
import {
  GetPostsDocument,
  MenuItemsDocument,
  useGetPostsQuery
} from '../generated/graphql'
import client from '../lib/apolloClient'

const IndexPage: NextPage = ({ data }: any) => {
  const [openSnackbar, setOpenSnackbar] = useState(true)
  const { state } = useAppContext()
  const { setLoading } = useLoadingContext()

  const { loading } = useGetPostsQuery()
  setLoading(loading)

  console.log(data)

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
  const { data: menu } = await client.query({
    query: MenuItemsDocument,
  })

  const { data: newPosts } = await client.query({
    query: GetPostsDocument,
    variables: {
      quantity: 3
    }
  })

  return {
    props: {
      data: {
        menu,
        newPosts,
      },
    },
    revalidate: 1
  }
}

export default IndexPage
