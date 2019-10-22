import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import PillButton from '../../components/buttons/pillBtn'
import { CardItem, ProfileCard } from '../../components/cards/cards'
import { Header, Subheader, MutedText } from '../../components/headers'

const ProfilePlan = ({ style }) => {
  const planRenewDate = 'Nov 1st, 2019'
  const planPrice = '$25'
  const planTitle = 'Starter Plan'

  const planFeatures = (
    <Fragment>
      Up to 5 employees <br />
      Manual Deduction Input <br />
    </Fragment>
  )

  return (
    <CardItem style={style} position="absolute" top="275px" left="0">
      <ProfileCard>
        <Header size="16px" font="ExtraBold" space="0" color="#380036" textAlign="left">
          Plan
        </Header>
        <Subheader size="12px" font="Bold" margin="10px 0 0 0" dark>
          Your current plan
        </Subheader>
        <MutedText margin="3px 0 22px 0">
          Your plan will automatically renew on {planRenewDate} and you will be
          chared {planPrice}.
        </MutedText>
        <Header size="21px" color="#4A4A4A" font="Thin" space="10px">
          {planTitle}
        </Header>
        <Subheader size="9px" font="Bold" margin="0 0 22px 0" dark center>
          {planFeatures}
        </Subheader>
        <PillButton
          type="button"
          med
          bordered
          onClick={() => {}}
        >
          Update Plan
        </PillButton>
      </ProfileCard>
    </CardItem>
  )
}

export default ProfilePlan

ProfilePlan.propTypes = {
  style: PropTypes.object.isRequired,
}
