import { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import styled from 'styled-components'
import MainLayout from '../components/Layout/MainLayout'
import NewPostsContainer from '../components/MainContent/NewPostsContainer'
import WelcomeNotification from '../components/Notification/WelcomeNotification'
import SideBarItem from '../components/SideBar/SideBarItem'
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

  // console.log(data)

  return (
    <MainLayout title="Homepage">
      <SideBar>
        <div className="pr-6">
          <SideBarItem />
          <SideBarItem />
          <SideBarItem />
          <SideBarItem />
        </div>
      </SideBar>

      <MainContent className='border-l-4'>
        <NewPostsContainer newPosts={data?.newPosts}/>
      </MainContent>
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

  return {
    props: {
      data: {
        menu,
        newPosts,
      },
    },
    revalidate: 1,
  }
}

export default IndexPage

const SideBar = styled.nav`
  width: 320px;
  float: left;
`

const MainContent = styled.div`
  margin-left: 320px;
  padding-left: 28px;
`