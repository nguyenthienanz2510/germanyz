import Image from "next/legacy/image";
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Category, GetBlogCategoriesQuery, Post } from '../../../generated/graphql'

interface Props {
  blogCategories: GetBlogCategoriesQuery
}

interface PostDataProps {
  node: Post
}

interface BlogCategoriesDataProps {
  node: Category
}

const BlogCategories: React.FC<Props> = props => {

  return (
    <>
      {props.blogCategories?.categories?.edges.map((category: BlogCategoriesDataProps | any) => {
        const hasParentCategory = Boolean(category.node.parent?.node?.name)
        const hasPosts = Boolean(category.node.posts?.edges.length)
        if (hasPosts) {
          return (
            <div
              key={category.node.categoryId}
              className="mt-7 pt-7 border-t-2"
            >
              <div className="flex justify-between items-center">
                <h3>{hasParentCategory ? (`${category.node.parent.node.name} - ${category.node.name}`) : category.node.name}</h3>
                <span>
                  <Link
                    className="underline hover:text-color-primary transition-all"
                    href={`/blog/category/${category.node.slug}?id=${category.node.categoryId}`}
                  >
                    View more
                  </Link>
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 mt-5">
                {category.node.posts.edges.map(
                  (post: PostDataProps, index: number) => {
                    if (index < 4) {
                      return (
                        <div key={post.node.postId} className="col-span-3">
                          <PostLink
                            className='transition-all duration-500 bg-[#fafcfa] hover:shadow-md dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active'
                            href={`/blog/${post.node.slug}?id=${post.node.postId}`}
                          >
                            <div>
                              <div className='overflow-hidden'>
                                <Image
                                  src={`${post.node.featuredImage?.node.mediaItemUrl}`}
                                  alt={`${post.node.title}`}
                                  width={1920}
                                  height={1080}
                                />
                              </div>
                              <div className='py-2 px-3'>
                                <h6 className='text-truncate-3'>{post.node.title}</h6>
                              </div>
                            </div>
                          </PostLink>
                        </div>
                      )
                    }
                    return
                  },
                )}
              </div>
            </div>
          )
        }
        return
      })}
    </>
  )
}

export default BlogCategories

const PostLink = styled(Link)`
  display: block;
  height: 100%;
  img {
    transition: all linear 0.3s;
  }
  &:hover {
    img {
      scale: 1.1;
    }
  }
`
