import { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import MainLayout from '../components/Layout/MainLayout'
import NewPostsContainer from '../components/MainContent/NewPostsContainer'
import WelcomeNotification from '../components/Notification/WelcomeNotification'
import { useLoadingContext } from '../context/loading'
import {
  GetPostsDocument,
  MenuItemsDocument,
  useGetPostsQuery,
} from '../generated/graphql'
import client from '../lib/apolloClient'

const IndexPage: NextPage = ({ data }: any) => {
  const { setLoading } = useLoadingContext()
  const { loading } = useGetPostsQuery()
  useEffect(() => {
    setLoading(loading)
  }, [loading])

  return (
    <MainLayout title="Homepage">

      <NewPostsContainer newPosts={data?.newPosts} />

      <WelcomeNotification />

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
      quantity: 3,
    },
  })

  console.log('[REVALIDATE]')

  return {
    props: {
      data: {
        menu,
        newPosts,
      },
    },
    revalidate: 10,
  }
}

export default IndexPage
