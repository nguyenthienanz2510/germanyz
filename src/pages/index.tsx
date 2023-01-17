import { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import MainLayout from '../components/Layout/Mainlayout'
import WelcomeNotification from '../components/Notification/WelcomeNotification'
import SideBarItem from '../components/SideBar/SideBarItem'
import { useLoadingContext } from '../context/loading'
import {
  GetPostsDocument,
  MenuItemsDocument,
  useGetPostsQuery,
} from '../generated/graphql'
import client from '../lib/apolloClient'
import { sanitize } from '../utils/miscellaneous'

const IndexPage: NextPage = ({ data }: any) => {
  const { setLoading } = useLoadingContext()
  const { loading } = useGetPostsQuery()
  useEffect(() => {
    setLoading(loading)
  }, [loading])

  console.log(data)

  return (
    <MainLayout title="Homepage">
      <div className="w-[320px] float-left">
        <div className="pr-6">
          <SideBarItem/>
          <SideBarItem/>
          <SideBarItem/>
          <SideBarItem/>
        </div>
      </div>
      <div className="ml-[320px] pl-7 border-l-4">
        {data.newPosts.posts.edges.map((post: any) => {
          return (
            <div key={post.node.postId} className="mb-5">
              <h2>{post.node.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitize(post.node.content ?? 'Nothing to preview'),
                }}
              />
            </div>
          )
        })}
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
