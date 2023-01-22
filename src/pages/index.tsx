import { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import MainLayout from '../components/Layout/MainLayout'
import NewPostsContainer from '../components/MainContent/NewPostsContainer'
import WelcomeNotification from '../components/Notification/WelcomeNotification'
import SideBarItem from '../components/SideBar/SideBarItem'
import { useLoadingContext } from '../context/loading'
import {
  GetPostsDocument,
  MenuItemsDocument,
  useGetPostsQuery
} from '../generated/graphql'
import client from '../lib/apolloClient'

const IndexPage: NextPage = ({ data }: any) => {
  const { setLoading } = useLoadingContext()
  const { loading } = useGetPostsQuery()
  useEffect(() => {
    setLoading(loading)
  }, [loading])

  // console.log(data)

  return (
    <MainLayout title="Homepage">
      <div className='w-[320px] float-left'>
        <div className="pr-6">
          <SideBarItem />
          <SideBarItem />
          <SideBarItem />
          <SideBarItem />
        </div>
      </div>

      <div className='border-l-4 ml-[320px] pl-7'>
        <NewPostsContainer newPosts={data?.newPosts}/>
      </div>
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