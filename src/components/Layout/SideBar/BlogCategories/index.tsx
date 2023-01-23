import { useRouter } from 'next/router'
import React from 'react'
import { GetBlogCategoriesQuery } from '../../../../generated/graphql'
import { NextLink } from '../../../Common/StyleCommon'
import SidebarBlockItem from '../../SideBar/SideBarBlockItem'

interface BlogCategoriesProps {
  blogCategories: GetBlogCategoriesQuery
}

const BlogCategories: React.FC<BlogCategoriesProps> = ({ blogCategories }) => {
  const router = useRouter()
  return (
    <SidebarBlockItem>
      <h5 className="mb-2">BlogCategories</h5>
      <ul>
        {blogCategories?.categories?.edges.map(category => {
          const hasParentCategory = category.node.parent?.node.name
          if (!hasParentCategory) {
            const hasChildCategory = category.node.children?.edges.length
            return (
              <>
                {hasChildCategory ? (
                  <li className="mt-1">
                    <NextLink
                      href={`/blog/category/${category.node.slug}?id=${category.node.categoryId}`}
                      className={router.asPath.includes(`/blog/category/${category.node.slug}`) ? 'active' : 'noooo'}
                    >
                      {category.node.name}
                    </NextLink>
                    <ul className="pl-3">
                      {category.node.children?.edges.map(categoryChildItem => {
                        return (
                          <li className="mt-1">
                            <NextLink
                              href={`/blog/category/${categoryChildItem.node.slug}?id=${categoryChildItem.node.categoryId}`}
                              className={
                                router.asPath.includes(
                                  `/blog/category/${categoryChildItem.node.slug}`,
                                )
                                  ? 'active'
                                  : 'noooo'
                              }
                            >
                              {categoryChildItem.node.name}
                            </NextLink>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                ) : (
                  <li className="mt-1">
                    <NextLink
                      href={`/blog/category/${category.node.slug}?id=${category.node.categoryId}`}
                      className={
                        router.asPath.includes(
                          `/blog/category/${category.node.slug}`,
                        )
                          ? 'active'
                          : 'noooo'
                      }
                    >
                      {category.node.name}
                    </NextLink>
                  </li>
                )}
              </>
            )
          }
          return
        })}
      </ul>
    </SidebarBlockItem>
  )
}

export default BlogCategories
