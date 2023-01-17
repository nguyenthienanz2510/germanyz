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
          <SideBarItem />
          <SideBarItem />
          <SideBarItem />
          <SideBarItem />
        </div>
      </div>

      <div className="ml-[320px] pl-7 border-l-4">
        <div>
          <h2 className='mb-5'>Related posts</h2>
          <div className="grid grid-cols-12 gap-x-7 gap-y-3">
            <div className="col-span-7 row-span-2 transition-all duration-400 bg-[#fafcfa] hover:shadow-md cursor-pointer dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active">
              <div>
                <div>
                  <img
                    src={
                      data.newPosts.posts.edges[0].node.featuredImage.node
                        .mediaItemUrl
                    }
                    alt={data.newPosts.posts.edges[0].node.title}
                  />
                </div>
                <div className='py-2 px-4'>
                  <h6 className='text-truncate-2'>{data.newPosts.posts.edges[0].node.title}</h6>  
                  <p className='mt-2 text-truncate-6'>{data.newPosts.posts.edges[0].node.content}</p>
                </div>
              </div>
            </div>
            <div className="col-span-5 transition-all duration-400 bg-[#fafcfa] hover:shadow-md cursor-pointer dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active">
              <div>
                <div>
                  <img
                    src={
                      data.newPosts.posts.edges[1].node.featuredImage.node
                        .mediaItemUrl
                    }
                    alt={data.newPosts.posts.edges[1].node.title}
                  />
                </div>
                <div className='py-2 px-4'>
                  <h6 className='text-truncate-2'>{data.newPosts.posts.edges[1].node.title}</h6>  
                </div>
              </div>
            </div>
            <div className="col-span-5 transition-all duration-400 bg-[#fafcfa] hover:shadow-md cursor-pointer dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active">
              <div>
                <div>
                  <img
                    src={
                      data.newPosts.posts.edges[2].node.featuredImage.node
                        .mediaItemUrl
                    }
                    alt={data.newPosts.posts.edges[2].node.title}
                  />
                </div>
                <div className='py-2 px-4'>
                  <h6 className='text-truncate-2'>{data.newPosts.posts.edges[2].node.title}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
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
