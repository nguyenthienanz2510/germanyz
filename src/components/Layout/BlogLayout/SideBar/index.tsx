import React from 'react'
import { GetBlogCategoriesQuery, GetPostsQuery } from '../../../../generated/graphql'
import BlogCategories from '../../SideBar/BlogCategories'
import LatestPosts from '../../SideBar/LastestPosts'

interface Props {
  blogCategories: GetBlogCategoriesQuery
  latestPosts: GetPostsQuery
}

const BlogLayoutSideBar: React.FC<Props> = ({blogCategories, latestPosts}) => {
  return (
    <div className="w-[320px] float-right">
      <div className="pl-6">
        <BlogCategories blogCategories={blogCategories}/>
        <LatestPosts latestPosts={latestPosts}/>
      </div>
    </div>
  )
}

export default BlogLayoutSideBar
