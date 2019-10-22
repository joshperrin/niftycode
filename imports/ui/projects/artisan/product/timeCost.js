import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../../icons/icon'
import EmptyStateMsg from './emptyStateMsg'
import { DetailCard, DetailCardIcon, DetailCardTitle, DetailCardCost } from '../components/cards/detailCard'
import ProductSection from '../components/products/productSection'
import { SectionHeader } from '../components/headers'
import { PillButton } from '../components/buttons/buttons'

const TimeCost = ({ productId, timeCost, history, timeCostRate, timeAmount, timeCostUnit }) => (
  <ProductSection>
    <SectionHeader>
      Time
    </SectionHeader>
    {timeCost > 0 ? (
      <DetailCard onClick={() => {}}>
        <DetailCardIcon>
          <Icon icon="timer" height="100%" width="100%" color="white" />
        </DetailCardIcon>
        <DetailCardTitle>
          <h1>{`${timeAmount} ${timeCostUnit}s`}</h1>
          <p>${timeCostRate}/{timeCostUnit}</p>
        </DetailCardTitle>
        <DetailCardCost>
          <p>
            <span>${timeCost}</span>
            Cost
          </p>
        </DetailCardCost>
      </DetailCard>
    ) : (
      <EmptyStateMsg
        title="Track your time"
        msg="How long does it take you to create this product?"
      />
    )}
    <PillButton
      background="#134420"
      onClick={() => {}}
    >
      Add time
    </PillButton>
  </ProductSection>
)

export default TimeCost

TimeCost.propTypes = {
  productId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  timeCost: PropTypes.number.isRequired,
  timeCostRate: PropTypes.number.isRequired,
  timeAmount: PropTypes.number.isRequired,
  timeCostUnit: PropTypes.string.isRequired,
}
