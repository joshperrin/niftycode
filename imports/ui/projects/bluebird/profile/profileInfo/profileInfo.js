import React from 'react'
import PropTypes from 'prop-types'

import user from '../../userData'
import PillButton from '../../components/buttons/pillBtn'
import { Header } from '../../components/headers'
import { CardItem, ProfileCard, CardInfoWrap, CardInfoItem, CardInfo } from '../../components/cards/cards'

const ProfileInfo = ({ style }) => {
  const {
    emails,
    profile: {
      phoneNumber,
      postalCode,
    },
  } = user
  return (
    <CardItem style={style} position="absolute" top="0" left="0">
      <ProfileCard>
        <Header size="16px" font="ExtraBold" space="0" color="#380036" textAlign="left">
          Info
        </Header>
        <CardInfoWrap>
          <CardInfoItem>
            <CardInfo size="14px" font="Bold" dark>
              Email
            </CardInfo>
            <CardInfo size="12px" dark>
              {emails[0].address}
            </CardInfo>
          </CardInfoItem>
          <CardInfoItem padding="0 0 20px 15px">
            <CardInfo size="14px" font="Bold" dark>
              Password
            </CardInfo>
            <CardInfo size="12px" dark>
              *********
            </CardInfo>
          </CardInfoItem>
          <CardInfoItem>
            <CardInfo size="14px" font="Bold" dark>
              Phone Number
            </CardInfo>
            <CardInfo size="12px" dark>
              {phoneNumber}
            </CardInfo>
          </CardInfoItem>
          <CardInfoItem padding="0 0 20px 15px">
            <CardInfo size="14px" font="Bold" dark>
              Postal Code
            </CardInfo>
            <CardInfo size="12px" dark>
              {postalCode}
            </CardInfo>
          </CardInfoItem>
        </CardInfoWrap>
        <PillButton
          type="button"
          med
          bordered
          onClick={() => {}}
        >
          Update Info
        </PillButton>
      </ProfileCard>
    </CardItem>
  )
}

export default ProfileInfo

ProfileInfo.propTypes = {
  style: PropTypes.object.isRequired,
}
