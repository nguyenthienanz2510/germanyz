import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { ProductVariation, SimpleProduct } from '../../../generated/graphql'

interface ProductProps {
  product: {
    node: SimpleProduct | ProductVariation
  }
}

const ProductLink = styled(Link)`
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

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div
      className="col-span-12 sm:col-span-6 md:col-span-4"
    >
      <ProductLink
        className="transition-all duration-500 bg-[#fafcfa] hover:shadow-md dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active"
        href={`/product/${product.node.slug}`}
      >
        <div>
          <div className="overflow-hidden">
            <Image
              src={`${product.node.featuredImage?.node.mediaItemUrl}`}
              alt={`${product.node.name}`}
              width={600}
              height={600}
            />
          </div>
          <div className="pt-2 px-3 pb-4">
            <h6 className="text-truncate-2 text-center">{product.node.name}</h6>
            <p className="text-center">{product.node.price}</p>
          </div>
        </div>
      </ProductLink>
    </div>
  )
}

export default ProductCard
