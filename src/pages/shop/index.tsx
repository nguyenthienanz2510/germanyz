import { GetStaticProps } from 'next'
import React from 'react'
import ShopLayout from '../../components/Layout/ShopLayout'
import WelcomeNotification from '../../components/Notification/WelcomeNotification'
import ProductCard from '../../components/Shop/ProductCard'
import {
  GetBlogCategoriesDocument,
  GetBlogCategoriesQuery,
  GetPostsDocument,
  GetPostsQuery,
  GetProductsDocument,
  GetProductsQuery,
} from '../../generated/graphql'
import client from '../../lib/apolloClient'

interface IndexPageProps {
  products: GetProductsQuery
  latestPosts: GetPostsQuery
  blogCategories: GetBlogCategoriesQuery
}

const IndexPage: React.FC<IndexPageProps> = ({
  products,
  latestPosts,
  blogCategories,
}) => {
  return (
    <ShopLayout
      latestPosts={latestPosts}
      blogCategories={blogCategories}
      SEO={{ title: 'Home', description: 'Germanyz - Bookie from Vietnamese' }}
    >
      <div>
        <h2 className="mb-5">Product</h2>
        <div className="grid grid-cols-12 gap-x-5 gap-y-7">
          {products.products?.edges.map((product: any) => {
            return <ProductCard product={product} />
          })}
        </div>
      </div>

      <WelcomeNotification />
    </ShopLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: products } = await client.query({
    query: GetProductsDocument,
  })

  const { data: latestPosts } = await client.query({
    query: GetPostsDocument,
    variables: {
      quantity: 5,
    },
  })

  const { data: blogCategories } = await client.query({
    query: GetBlogCategoriesDocument,
  })

  return {
    props: {
      products,
      latestPosts,
      blogCategories,
    },
    revalidate: 1,
  }
}

export default IndexPage
