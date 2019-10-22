import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import ImageSlider from '../components/imageSlider'
import StatGroup from '../components/statGroup'
import SuppliesUsed from './suppliesUsed/suppliesUsed'
import CircleButton from '../components/buttons/circleButton'
import ExpenseAllocation from './expenseAllocation'
import TimeCost from './timeCost'
import CostBreakdown from './costBreakdown'
import calculateExpenseCosts from './utilities'
import productData from '../products/productsData.js'
import { Header } from '../components/headers'


const ProductFull = ({ history }) => {
  /* --------------
    State
  ---------------- */
  const [addSupplies, toggleAddSupplies] = useState(false)

  /* --------------
    Variables
  ---------------- */

  // User
  const { user: { timeCostRate = 0, timeCostUnit = 0, productCount = 0 } = {} } = {}

  // Product
  const product = productData[0]
  const { _id, title, usedSupplies, supplyCost, timeAmount = 0 } = product
  const { length: numberOfSupplies } = usedSupplies || []
  const timeCost = timeCostRate * timeAmount

  // Expense
  const { expenses = [] } = {}
  const { length: numberOfExpenses } = expenses || []
  const { expenseCost, expensesPerItem } = calculateExpenseCosts(expenses, productCount)


  return (
    <Fragment>
      <CircleButton
        noAnimate
        icon="arrow-up"
        text="back"
        top="-75px"
        right="60px"
        action={() => history.goBack()}
      />
      <Header size="15px" color="#134420" top="-82px" bottom="14px" underline>
        View Product
      </Header>
      <Header size="20px" color="white" bottom="40px">
        {title}
      </Header>

      <ImageSlider product={product} />

      <StatGroup
        product={product}
        expenseCost={expenseCost || 0}
        timeCost={timeCost || 0}
      />

      <CostBreakdown
        product={product}
        timeCost={timeCost || 0}
        timeCostRate={timeCostRate || 0}
        timeCostUnit={timeCostUnit || 'hours'}
        expenseQuantity={numberOfExpenses}
        usedSupplies={numberOfSupplies}
        expenseCost={expenseCost}
      />

      <SuppliesUsed
        productCost={supplyCost || 0}
        usedSupplies={usedSupplies || []}
        toggleSlideIn={() => toggleAddSupplies(!addSupplies)}
      />

      <TimeCost
        history={history}
        productId={_id}
        timeAmount={timeAmount || 0}
        timeCost={timeCost || 0}
        timeCostRate={timeCostRate || 0}
        timeCostUnit={timeCostUnit || 'hours'}
      />

      <ExpenseAllocation
        history={history}
        expenses={expensesPerItem}
        expenseCost={expenseCost}
        productCount={productCount}
      />

    </Fragment>
  )
}

ProductFull.propTypes = {
  history: PropTypes.object.isRequired,
}

export default ProductFull
