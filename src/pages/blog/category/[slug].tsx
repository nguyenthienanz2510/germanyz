import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { Router } from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PostDescription } from '../../../components/Common/StyleCommon'
import BlogLayout from '../../../components/Layout/BlogLayout'
import {
  GetBlogCategoriesDocument,
  GetBlogCategoriesQuery,
  GetPostByCategoryDocument,
  GetPostByCategoryQuery,
  GetPostsDocument,
  GetPostsQuery,
  useGetPostsPaginationQuery,
} from '../../../generated/graphql'
import client from '../../../lib/apolloClient'
import { sanitize } from '../../../utils/miscellaneous'
import LoadingButton from '@mui/lab/LoadingButton'

interface GetPostsByCategoryProps {
  blogCategory: GetPostByCategoryQuery
  blogCategories: GetBlogCategoriesQuery
  latestPosts: GetPostsQuery
}

const GetPostsByCategory: React.FC<GetPostsByCategoryProps> = ({
  blogCategory,
  blogCategories,
  latestPosts,
}) => {
  const [isMount, setMount] = useState(false)
  useEffect(() => {
    setMount(true)
    console.log('prefect')
  }, [])

  const {
    data: categoryPosts,
    loading: loading,
    fetchMore,
    refetch
  } = useGetPostsPaginationQuery({
    variables: {
      offset: 0,
      size: 3,
      categoryName: String(blogCategory?.category?.name),
    },
    notifyOnNetworkStatusChange: true,
  })

  Router.events.on('routeChangeComplete', () => {
    refetch()
  })

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        offset: Number(categoryPosts?.posts?.edges.length),
      },
    })
    console.log(Number(categoryPosts?.posts?.edges.length))
  }

  return (
    <BlogLayout
      SEO={{
        title: blogCategory?.category?.name || 'Category',
        description: blogCategory?.category?.name || 'Category',
      }}
      blogCategories={blogCategories}
      latestPosts={latestPosts}
    >
      <h2 className="mb-5">{blogCategory?.category?.name}</h2>
      <div className="grid grid-cols-12 gap-x-3 gap-y-6">
        {Boolean(categoryPosts?.posts?.edges.length) ? (
          categoryPosts?.posts?.edges.map((post: any) => {
            return (
              <div
                key={post.node.postId}
                className="col-span-12 sm:col-span-6 md:col-span-4"
              >
                <PostLink
                  className="transition-all duration-500 bg-[#fafcfa] hover:shadow-md dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active"
                  href={`/blog/${post.node.slug}`}
                >
                  <div>
                    <div className="overflow-hidden">
                      <Image
                        src={`${post.node.featuredImage?.node.mediaItemUrl}`}
                        alt={`${post.node.title}`}
                        width={1920}
                        height={1080}
                      />
                    </div>
                    <div className="pt-2 px-3 pb-4">
                      <h6 className="text-truncate-2">{post.node.title}</h6>
                      {isMount ? (
                        <PostDescription
                          className="mt-1 text-truncate-4"
                          dangerouslySetInnerHTML={{
                            __html: sanitize(post.node.content ?? {}),
                          }}
                        />
                      ) : null}
                    </div>
                  </div>
                </PostLink>
              </div>
            )
          })
        ) : (
          <span className="col-span-12">Nothing to display</span>
        )}
      </div>
      {categoryPosts?.posts?.pageInfo?.offsetPagination?.hasMore && (
        <div className="mt-5 text-center">
          <LoadingButton
            loading={loading}
            onClick={loadMorePosts}
            className="text-color-text-dark dark:text-color-text-light hover:text-color-primary dark:hover:text-color-primary hover:underline hover:bg-transparent capitalize text-16 transition-all"
          >
            {!loading && "Show more"}
          </LoadingButton>
        </div>
      )}
    </BlogLayout>
  )
}

export default GetPostsByCategory

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: blogCategories } = await client.query({
    query: GetBlogCategoriesDocument,
  })
  const paths = blogCategories.categories?.edges.map((category: any) => {
    return {
      params: { slug: String(category.node.slug) },
    }
  })
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context
  const { data: blogCategory } = await client.query({
    query: GetPostByCategoryDocument,
    variables: {
      slug: String(params?.slug ?? ''),
    },
  })

  const { data: blogCategories } = await client.query({
    query: GetBlogCategoriesDocument,
  })

  const { data: latestPosts } = await client.query({
    query: GetPostsDocument,
    variables: {
      quantity: 5,
    },
  })

  return {
    props: {
      blogCategory: blogCategory,
      blogCategories: blogCategories,
      latestPosts: latestPosts,
    },
    revalidate: 1,
  }
}

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
