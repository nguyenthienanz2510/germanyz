import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { ProductVariation, SimpleProduct } from '../../../generated/graphql'
import { removeTags } from '../../../utils/removeTags'

interface ProductProps {
  product: {
    node: ProductVariation | SimpleProduct
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
  const productImage = product.node.featuredImage?.node.mediaItemUrl || '/logo.svg'
  return (
    <div
      key={product.node.databaseId}
      className="col-span-12 sm:col-span-6 md:col-span-4"
    >
      <ProductLink
        className="transition-all duration-500 bg-[#fafcfa] hover:shadow-md dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active"
        href={`/product/${product.node.slug}`}
      >
        <div>
          <div className="overflow-hidden">
            <Image
              src={productImage}
              alt={`${product.node.name}`}
              width={600}
              height={600}
            />
          </div>
          <div className="max-h-[96px] overflow-hidden">
            <div className="min-h-[72px] mt-2 mb-4">
              <h6 className="text-truncate-2 text-center">
                {product.node.name}
              </h6>
              <p className="text-center">{product.node.price}</p>
            </div>
            <div>
              <p className="text-truncate-3">
                {removeTags(String(product.node.description))}
              </p>
            </div>
          </div>
        </div>
      </ProductLink>
    </div>
  )
}

export default ProductCard
