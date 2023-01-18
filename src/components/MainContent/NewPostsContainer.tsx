import Image from 'next/legacy/image'
import React from 'react'
var moment = require('moment')

interface Props {
  newPosts: {
    posts: {
      edges: any
    }
  }
}

const NewPostsContainer: React.FC<Props> = props => {
  console.log(props)
  return (
    <div>
      <h2 className="mb-5">Related posts</h2>
      <div className="grid grid-cols-12 gap-x-7 gap-y-3">
        <div className="col-span-7 row-span-2 transition-all duration-500 bg-[#fafcfa] hover:shadow-md cursor-pointer dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active">
          <div>
            <div className=''>
              {/* <img
                src={
                  props.newPosts.posts.edges[0].node.featuredImage.node
                    .mediaItemUrl
                }
                alt={props.newPosts.posts.edges[0].node.title}
              /> */}
              <Image
                layout="fill"
                style={{height: "100%", width:"100%"}}
                src={
                  props.newPosts.posts.edges[0].node.featuredImage.node
                    .mediaItemUrl
                }
                alt={props.newPosts.posts.edges[0].node.title}
                
              />
            </div>
            <div className="py-2 px-4">
              <h4 className="text-truncate-2">
                {props.newPosts.posts.edges[0].node.title}
              </h4>
              <p className="mt-1">
                By{' '}
                <span className="font-semibold capitalize">
                  {props.newPosts.posts.edges[0].node.author.node.name}
                </span>{' '}
                at{' '}
                <span className="font-semibold">
                  {moment(props.newPosts.posts.edges[0].node.dateGmt).format(
                    'MMMM Do YYYY, h:mm:ss a',
                  )}
                </span>
              </p>
              <p className="mt-1 font-light text-truncate-5">
                {props.newPosts.posts.edges[0].node.content}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-5 transition-all duration-500 bg-[#fafcfa] hover:shadow-md cursor-pointer dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active">
          <div>
            <div>
              <img
                src={
                  props.newPosts.posts.edges[1].node.featuredImage.node
                    .mediaItemUrl
                }
                alt={props.newPosts.posts.edges[1].node.title}
              />
            </div>
            <div className="py-2 px-4">
              <h6 className="text-truncate-2">
                {props.newPosts.posts.edges[1].node.title}
              </h6>
            </div>
          </div>
        </div>
        <div className="col-span-5 transition-all duration-500 bg-[#fafcfa] hover:shadow-md cursor-pointer dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active">
          <div>
            <div>
              <img
                src={
                  props.newPosts.posts.edges[2].node.featuredImage.node
                    .mediaItemUrl
                }
                alt={props.newPosts.posts.edges[2].node.title}
              />
            </div>
            <div className="py-2 px-4">
              <h6 className="text-truncate-2">
                {props.newPosts.posts.edges[2].node.title}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPostsContainer
