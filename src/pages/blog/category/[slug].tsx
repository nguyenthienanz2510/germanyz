import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import BlogLayout from '../../../components/Layout/BlogLayout'
import { GetPostByCategoryDocument } from '../../../generated/graphql'
import client from '../../../lib/apolloClient'
import { sanitize } from '../../../utils/miscellaneous'

const PostPreview: NextPage = ({ data }: any) => {
  const [isMount, setMount] = useState(false)
  useEffect(() => {
    setMount(true)
  }, [])
  console.log(data)
  return (
    <BlogLayout title="Blog preview">
      <h2 className="mb-5">{data.category.name}</h2>
      <div className="grid grid-cols-12 gap-x-3 gap-y-5">
        {data.category.posts.edges.map((post: any) => {
          return (
            <div key={post.node.postId} className="col-span-4">
              <PostLink
                className="transition-all duration-500 bg-[#fafcfa] hover:shadow-md dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active"
                href={`/blog/${post.node.slug}?id=${post.node.postId}`}
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
        })}
      </div>
    </BlogLayout>
  )
}

export default PostPreview

export const getServerSideProps: GetServerSideProps = async context => {
  const { params } = context || {}
  const { data } = await client.query({
    query: GetPostByCategoryDocument,
    variables: {
      slug: String(params?.slug ?? ''),
    },
  })

  return {
    props: {
      data: data || {},
    },
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
