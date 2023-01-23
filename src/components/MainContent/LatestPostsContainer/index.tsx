import Image from 'next/legacy/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GetPostsQuery } from '../../../generated/graphql'
import { sanitize } from '../../../utils/miscellaneous'
var moment = require('moment')

interface Props {
  latestPosts: GetPostsQuery
}

const LatestPostsContainer: React.FC<Props> = ({ latestPosts }) => {
  const [isMount, setMount] = useState(false)
  useEffect(() => {
    setMount(true)
  }, [])

  return (
    <div>
      <h2 className="mb-5">Latest posts</h2>
      <div className="grid grid-cols-12 gap-x-7 gap-y-3">
        <div className="col-span-7 row-span-2 transition-all duration-500 bg-[#fafcfa] hover:shadow-md dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active">
          <PostLink
            href={`/blog/${latestPosts.posts?.edges[0].node.slug}?id=${latestPosts.posts?.edges[0].node.postId}`}
          >
            <div>
              <div className="overflow-hidden">
                <Image
                  layout="responsive"
                  width={1920}
                  height={1080}
                  priority
                  src={
                    latestPosts.posts?.edges[0]?.node?.featuredImage?.node
                      .mediaItemUrl || ''
                  }
                  alt={
                    latestPosts.posts?.edges[0].node.title || 'Thumbnail Image'
                  }
                />
              </div>
              <div className="py-2 px-4">
                <h4 className="text-truncate-2">
                  {latestPosts.posts?.edges[0].node.title}
                </h4>
                <p className="mt-1">
                  By{' '}
                  <span className="font-semibold capitalize">
                    {latestPosts.posts?.edges[0]?.node?.author?.node.name}
                  </span>
                  {' - '}
                  at{' '}
                  <span className="font-semibold">
                    {moment(latestPosts.posts?.edges[0].node.dateGmt).format(
                      'MMMM Do YYYY, h:mm:ss a',
                    )}
                  </span>
                </p>
                {isMount ? (
                  <PostDescription
                    className="mt-1 text-truncate-5"
                    dangerouslySetInnerHTML={{
                      __html: sanitize(
                        latestPosts.posts?.edges[0].node.content ?? {},
                      ),
                    }}
                  />
                ) : null}
              </div>
            </div>
          </PostLink>
        </div>
        <div className="col-span-5 transition-all duration-500 bg-[#fafcfa] hover:shadow-md cursor-pointer dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active">
          <PostLink
            href={`/blog/${latestPosts.posts?.edges[1].node.slug}?id=${latestPosts.posts?.edges[0].node.postId}`}
          >
            <div>
              <div className="overflow-hidden">
                <Image
                  layout="responsive"
                  width={1920}
                  height={1080}
                  priority
                  src={
                    latestPosts.posts?.edges[1].node.featuredImage?.node
                      .mediaItemUrl || ''
                  }
                  alt={latestPosts.posts?.edges[1].node.title || 'Thumbnail image'}
                />
              </div>
              <div className="py-2 px-4">
                <h6 className="text-truncate-2">
                  {latestPosts.posts?.edges[1].node.title}
                </h6>
              </div>
            </div>
          </PostLink>
        </div>
        <div className="col-span-5 transition-all duration-500 bg-[#fafcfa] hover:shadow-md cursor-pointer dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active">
          <PostLink
            href={`/blog/${latestPosts.posts?.edges[2].node.slug}?id=${latestPosts.posts?.edges[0].node.postId}`}
          >
            <div>
              <div className="overflow-hidden">
                <Image
                  layout="responsive"
                  width={1920}
                  height={1080}
                  priority
                  src={
                    latestPosts.posts?.edges[2].node.featuredImage?.node
                      .mediaItemUrl || ''
                  }
                  alt={latestPosts.posts?.edges[2].node.title || 'Thumbnail image'}
                />
              </div>
              <div className="py-2 px-4">
                <h6 className="text-truncate-2">
                  {latestPosts.posts?.edges[2].node.title}
                </h6>
              </div>
            </div>
          </PostLink>
        </div>
      </div>
    </div>
  )
}

export default LatestPostsContainer

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

const PostDescription = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: none;
  }
`
