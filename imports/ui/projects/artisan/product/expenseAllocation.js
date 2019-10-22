import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../../icons/icon'
import EmptyStateMsg from './emptyStateMsg'
import ProductSection from '../components/products/productSection'
import { SectionHeader } from '../components/headers'
import { Label } from '../components/labels/roundedLabel'
import { PillButton } from '../components/buttons/buttons'
import {
  ExpenseCircle, ExpenseName, ExpenseValue, ExpenseFrequency,
} from '../components/expenses/expenseCircle'

const ExpenseAllocation = ({ expenses, expenseCost, history }) => {
  const { length: expensesLength } = expenses

  return (
    <ProductSection>
      <SectionHeader>
        Expenses
        <Label>{expensesLength} items</Label>
        <Label>${expenseCost}</Label>
        {/* <Label>{productCount} products</Label> */}
      </SectionHeader>
      {expensesLength > 0 ? (
        expenses.map(({ _id, name, icon, costPerItem }) => (
          <ExpenseCircle key={_id} small disabled>
            <Icon icon={icon} width="40px" height="40px" color="#4A4A4A" />
            <ExpenseName>{name}</ExpenseName>
            <ExpenseValue>
              ${costPerItem}
            </ExpenseValue>
            <ExpenseFrequency>per product</ExpenseFrequency>
          </ExpenseCircle>
        ))
      ) : (
        <EmptyStateMsg
          title="Track your expenses"
          msg="Enter your expenses to get a full picture of the costs associated in creating your product"
        />
      )}
      <PillButton onClick={() => {}} background="#134420">
        Add Expense
      </PillButton>
    </ProductSection>
  )
}

export default ExpenseAllocation

ExpenseAllocation.propTypes = {
  expenses: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  expenseCost: PropTypes.number.isRequired,
}
