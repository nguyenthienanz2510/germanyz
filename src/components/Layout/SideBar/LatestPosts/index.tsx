import Image from "next/legacy/image";
import React from 'react'
import { GetPostsQuery } from '../../../../generated/graphql'
import { CardLink } from '../../../Common/StyleCommon'
import SidebarBlockItem from '../SideBarBlockItem'

interface latestPostsProps {
  latestPosts: GetPostsQuery
}

const LatestPosts: React.FC<latestPostsProps> = ({ latestPosts}) => {
  return (
    <SidebarBlockItem>
      <h5 className="mb-2">Latest Posts</h5>
      <ul>
        {latestPosts?.posts?.edges.map(post => {
          return (
            <li className="mt-2 sm:mt-4 lg:mt-2" key={post.node.postId}>
              <CardLink
                href={`/blog/${post.node.slug}?id=${post.node.postId}`}
                className="transition-all hover:shadow-sm dark:hover:shadow-none"
              >
                <div className="grid grid-cols-12 gap-2 sm:gap-4 lg:gap-2">
                  <div className="col-span-4 overflow-hidden">
                    <Image
                      src={post.node.featuredImage?.node.mediaItemUrl || ''}
                      alt={post.node.title || 'Thumbnail Image'}
                      layout="responsive"
                      width={1920}
                      height={1080}
                    />
                  </div>
                  <div className="col-span-8">
                    <p className="title text-truncate-2">{post.node.title}</p>
                  </div>
                </div>
              </CardLink>
            </li>
          )
        })}
      </ul>
    </SidebarBlockItem>
  )
}

export default LatestPosts
