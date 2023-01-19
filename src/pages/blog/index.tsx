import { GetStaticProps, NextPage } from 'next'
import styled from 'styled-components'
import BlogCategories from '../../components/Blog/BlogCategoryBlock'
import BlogLayout from '../../components/Layout/BlogLayout'
import NewPostsContainer from '../../components/MainContent/NewPostsContainer'
import SideBarItem from '../../components/SideBar/SideBarItem'
import {
  GetBlogCategoriesDocument,
  GetPostsDocument,
} from '../../generated/graphql'
import client from '../../lib/apolloClient'

const Blog: NextPage = ({ data }: any) => {
  console.log(data?.blogCategories.categories.edges)
  return (
    <BlogLayout title="Blog">
      <SideBar>
        <div className="pl-6">
          <SideBarItem />
          <SideBarItem />
        </div>
      </SideBar>

      <MainContent className="border-r-4">
        
        <NewPostsContainer newPosts={data?.newPosts} />

        <BlogCategories blogCategories={data?.blogCategories}/>
        
      </MainContent>
    </BlogLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: newPosts } = await client.query({
    query: GetPostsDocument,
    variables: {
      quantity: 3,
    },
  })

  const { data: blogCategories } = await client.query({
    query: GetBlogCategoriesDocument,
  })

  return {
    props: {
      data: {
        newPosts,
        blogCategories,
      },
    },
    revalidate: 1,
  }
}

export default Blog

const SideBar = styled.nav`
  width: 320px;
  float: right;
`

const MainContent = styled.div`
  margin-right: 320px;
  padding-right: 28px;
`
