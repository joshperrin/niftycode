import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StatGroup = ({ expenseCost, timeCost, product: { supplyCost, price, quantity } }) => {
  const cost = Math.round(supplyCost + expenseCost + timeCost)
  const profit = Math.round(price - cost)
  const margin = Math.round((price - cost) / price)
  return (
    <Stats>
      <Stat color="red">
        <StatTitle>Cost</StatTitle>
        <StatValue>${cost || 0}</StatValue>
      </Stat>
      <Stat color="green">
        <StatTitle>Profit</StatTitle>
        <StatValue>${profit > 0 ? profit : 0}</StatValue>
      </Stat>
      <Stat>
        <StatTitle>Margin</StatTitle>
        <StatValue>{margin || 0}%</StatValue>
      </Stat>
      <Stat>
        <StatTitle>Units</StatTitle>
        <StatValue>{quantity || 0}</StatValue>
      </Stat>
    </Stats>
  )
}

StatGroup.propTypes = {
  product: PropTypes.object.isRequired,
  expenseCost: PropTypes.number.isRequired,
  timeCost: PropTypes.number.isRequired,
}

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  padding: 0 10px;
  margin: 25px auto;
`

const Stat = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  padding-top: 17px;
  border-radius: 12px;
  font-family: Arial;
  color: ${props => props.color === 'red'
    ? '#F56151'
    : props.color === 'green'
      ? '#50A751'
      : '#4A4A4A'};
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 4px 0 rgba(207, 207, 207, 0.77);
`

const StatTitle = styled.p`
  font-size: 14px;
  margin: 0 0 3px 0;
`

const StatValue = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`

export default StatGroup
