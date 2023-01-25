import React from 'react'
import { GetBlogCategoriesQuery, GetPostsQuery } from '../../../../generated/graphql'
import BlogCategories from '../../SideBar/BlogCategories'
import LatestPosts from '../../SideBar/LatestPosts'

interface Props {
  blogCategories: GetBlogCategoriesQuery
  latestPosts: GetPostsQuery
}

const BlogLayoutSideBar: React.FC<Props> = ({blogCategories, latestPosts}) => {
  return (
    <div className="w-full mt-10 lg:mt-0 lg:w-[320px] lg:absolute lg:top-0 lg:right-0">
      <div className="lg:pl-6">
        <BlogCategories blogCategories={blogCategories}/>
        <LatestPosts latestPosts={latestPosts}/>
      </div>
    </div>
  )
}

export default BlogLayoutSideBar
