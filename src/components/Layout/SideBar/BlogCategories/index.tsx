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
      <h5 className="mb-2">Blog Categories</h5>
      <ul>
        {blogCategories.categories?.edges.map(category => {
          const hasParentCategory = category.node.parent?.node.name
          if (!hasParentCategory) {
            const hasChildCategory = category.node.children?.edges.length
            return (
              <li className="mt-1" key={category.node.categoryId}>
                {hasChildCategory ? (
                  <>
                    <NextLink
                      href={`/blog/category/${category.node.slug}?id=${category.node.categoryId}`}
                      className={
                        router.asPath.includes(
                          `/blog/category/${category.node.slug}`,
                        )
                          ? 'active'
                          : ''
                      }
                    >
                      {category.node.name}
                    </NextLink>
                    <ul className="pl-3">
                      {category.node.children?.edges.map(categoryChildItem => {
                        return (
                          <li
                            className="mt-1"
                            key={categoryChildItem.node.categoryId}
                          >
                            <NextLink
                              href={`/blog/category/${categoryChildItem.node.slug}?id=${categoryChildItem.node.categoryId}`}
                              className={
                                router.asPath.includes(
                                  `/blog/category/${categoryChildItem.node.slug}`,
                                )
                                  ? 'active'
                                  : ''
                              }
                            >
                              {categoryChildItem.node.name}
                            </NextLink>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                ) : (
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
                )}
              </li>
            )
          }
          return
        })}
      </ul>
    </SidebarBlockItem>
  )
}

export default BlogCategories
