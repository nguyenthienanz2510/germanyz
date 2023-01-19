import { GetStaticProps, NextPage } from 'next'
import styled from 'styled-components'
import { isNull } from 'util'
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

        <div>
          {data.blogCategories?.categories.edges.map((category: any) => {
            if (!Boolean(category.node.parentDatabaseId)) {
              return (
                <div key={category.node.categoryId}>
                  <h3>{category.node.name}</h3>
                </div>
              )
            }
            return
          })}
        </div>
        
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
