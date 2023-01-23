import React from 'react'
import { GetBlogCategoriesQuery } from '../../../../generated/graphql'
import BlogCategories from '../../SideBar/BlogCategories'
import SidebarBlockItem from '../../SideBar/SideBarBlockItem'

interface Props {
  blogCategories: GetBlogCategoriesQuery
}

const BlogLayoutSideBar: React.FC<Props> = ({blogCategories}) => {
  return (
    <div className="w-[320px] float-right">
      <div className="pl-6">
        <BlogCategories blogCategories={blogCategories}/>
        <SidebarBlockItem>Lasted Post</SidebarBlockItem>
      </div>
    </div>
  )
}

export default BlogLayoutSideBar
