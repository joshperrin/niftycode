import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Product from './product'
import { ProductContainer } from '../components/products/productcard'
import { Header, Subheader } from '../components/headers'
import { PillButton } from '../components/buttons/buttons'
import productData from './productsData'


const Products = ({ history }) => (
  <ProductContainer>
    {productData ? productData.map(product => (
      <Product
        key={product._id}
        product={product}
        history={history}
      />
    )) : (
      <Fragment>
        <Header size="24px" font="Black" dark>
          You do not have any products yet
        </Header>
        <Subheader size="16px" font="Bold" bottom="30px" maxWidth="320px" dark withSpace>
          Enter your products to calculate your costs
        </Subheader>
        <PillButton
          background="#134420"
          onClick={() => history.push('/product/add/title')}
        >
          Create a Product
        </PillButton>
      </Fragment>
    )}
  </ProductContainer>
)

Products.propTypes = {
  history: PropTypes.object.isRequired,
}

export default Products
