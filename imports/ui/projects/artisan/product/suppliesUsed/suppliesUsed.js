import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { SectionHeader } from '../../components/headers'
import { PillButton } from '../../components/buttons/buttons'
import { Label } from '../../components/labels/roundedLabel'
import ProductSection from '../../components/products/productSection'
import CircleButton from '../../components/buttons/circleButton'
import EmptyStateMsg from '../emptyStateMsg'

const SuppliesUsed = ({ usedSupplies, productCost }) => (
  <ProductSection>
    <SectionHeader>
      Supplies Used
      {usedSupplies.length > 0 && (
        <Fragment>
          <Label>{usedSupplies.length} items</Label>
          <Label>${productCost}</Label>
        </Fragment>
      )}
      <CircleButton action={() => {}} icon="plus" top="5px" right="10px" />
    </SectionHeader>
    <EmptyStateMsg
      measurements
      title="Know your product"
      msg="Enter the supplies used to create this product to calculate your profit"
    />
    <PillButton onClick={() => {}} background="#134420">
      Add Supply
    </PillButton>
  </ProductSection>
)

SuppliesUsed.propTypes = {
  usedSupplies: PropTypes.array.isRequired,
  productCost: PropTypes.number.isRequired,
}

export default SuppliesUsed
