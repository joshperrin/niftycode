import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../../../icons/icon'
import { Header } from '../components/headers'
import { Circle } from '../components/buttons/circleButton'


const CostBreakdown = ({
  expenseQuantity, usedSupplies, timeCost, timeCostRate, timeCostUnit, expenseCost,
  product: { supplyCost, timeAmount },
}) => {
  const costs = [{
    key: 1,
    title: 'Supplies Used',
    items: `${usedSupplies} item${usedSupplies > 1 ? 's' : ''}`,
    icon: 'artSupplies',
    amount: `$${supplyCost || 0}`,
  }, {
    key: 2,
    title: 'Time Cost',
    items: `$${timeCostRate} x ${timeAmount || 0} ${timeCostUnit || 'hours'}`,
    icon: 'timer',
    amount: `$${timeCost || 0}`,
  }, {
    key: 3,
    title: 'Expenses',
    items: `${expenseQuantity} item${expenseQuantity > 1 ? 's' : ''}`,
    icon: 'dollarSign',
    amount: `$${expenseCost || 0}`,
  }]

  return (
    <CostBreakdownWrap>
      <Header font="bold" size="16px" bottom="25px" dark underline>
        Cost Breakdown
      </Header>
      {costs.map(({ key, title, items, icon, amount }) => (
        <Cost key={key}>
          <Circle>
            <Icon icon={icon} height="100%" width="100%" color="white" />
          </Circle>
          <CostTitle>{title}</CostTitle>
          <CostItems>{items}</CostItems>
          <CostAmount>{amount}</CostAmount>
        </Cost>
      ))}
    </CostBreakdownWrap>
  )
}

export default CostBreakdown

CostBreakdown.propTypes = {
  product: PropTypes.object.isRequired,
  timeCost: PropTypes.number.isRequired,
  timeCostRate: PropTypes.number.isRequired,
  timeCostUnit: PropTypes.string.isRequired,
  expenseQuantity: PropTypes.number.isRequired,
  usedSupplies: PropTypes.number.isRequired,
  expenseCost: PropTypes.number.isRequired,
}

const CostBreakdownWrap = styled.div`
  padding-top: 5px;
  margin-bottom: 50px;
`

const Cost = styled.div`
  display: inline-block;
  width: 125px;
  margin: 0 15px;
  text-align: center;
`

const CostTitle = styled.p`
  font-family: Arial;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 0;
  color: #4A4A4A;
`

const CostItems = styled(CostTitle)`
  font-size: 12px;
  color: rgba(99,98,100,0.91);
  margin-top: 5px;
`

const CostAmount = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #4A4A4A;
`
