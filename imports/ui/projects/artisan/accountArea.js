import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import MainHeader from './components/mainheader'
import MainContainer from './components/maincontainer'
import Products from './products/products'
import Product from './product/productfull'

const AccountArea = props => (
  <Fragment>
    {/* Account Area Header */}
    <MainHeader {...props} />
    <MainContainer>
      <Route
        exact
        path="/artisan/code/products"
        component={Products}
      />
      <Route
        exact
        path="/artisan/code/product"
        component={Product}
      />
    </MainContainer>
  </Fragment>
)

export default AccountArea
