import React from 'react'
import PropTypes from 'prop-types'

import {
  ProductCard,
  ProductPrice,
  ProductImageWrap,
  ProductImage,
  ProductTitle,
  ProductDetails,
  ProductDetail,
} from '../components/products/productcard'


const Product = ({
  product: { price, etsyImages, title, cost, quantity },
}) => {
  const profit = (price - cost).toFixed(2)
  return (
    <ProductCard onClick={() => {}}>
      <ProductPrice> ${price || 0} </ProductPrice>
      <ProductImageWrap>
        <ProductImage imageUrl={etsyImages && etsyImages[0]} />
      </ProductImageWrap>
      <ProductTitle>{title}</ProductTitle>
      <ProductDetails>
        <ProductDetail>
          <p>Cost</p>
          ${cost || 0}
        </ProductDetail>
        <ProductDetail>
          <p>Units</p>
          {quantity || 0}
        </ProductDetail>
        <ProductDetail>
          <p>Profit</p>
          ${profit > 0 ? profit : 0}
        </ProductDetail>
      </ProductDetails>
    </ProductCard>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

export default Product
