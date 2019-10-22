import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PillButton from '../../components/buttons/pillBtn'
import StripeElements from '../../components/stripe/stripeElements'
import Icon from '../../../../icons/icon'
import LoadingIcon from '../../components/loadingIcon'
import { CardItem, ProfileCard } from '../../components/cards/cards'
import { Header, Subheader, MutedText } from '../../components/headers'
import { StyledInput, InputIconWrap } from '../../components/forms/inputs'

class ProfileBilling extends PureComponent {
  state = {
    updatingCard: false,
    editingCard: false,
  }

  toggleEditingCard = () => this.setState(prevState => ({
    editingCard: !prevState.editingCard,
  }))

  toggleUpdatingCard = () => this.setState(prevState => ({
    updatingCard: !prevState.updatingCard,
  }))

  render() {
    const { style } = this.props
    const stripeCard = {
      brand: 'Visa',
      last4: '4242',
    }
    const { editingCard, updatingCard } = this.state
    return (
      <CardItem style={style} position="absolute" top="275px" right="0">
        <ProfileCard>
          <Header size="16px" font="ExtraBold" space="0" color="#380036" textAlign="left">
            Billing
          </Header>
          {(!stripeCard.brand || editingCard) ? (
            <Fragment>
              <Subheader size="12px" font="Bold" margin="10px 0 0 0" dark>
                Enter your new card details
              </Subheader>
              <MutedText margin="3px 0 5px 0">
                Payments securly processed by Stripe over an SSL encrypted connection.
                We do not see, or save your credit card details.
              </MutedText>
              {updatingCard && <LoadingIcon text="updating card" />}
              <HideElements hidden={updatingCard}>
                <StripeElements
                  medButton
                  noLabel
                  margin="0"
                  hidden={updatingCard}
                  toggleUpdatingCard={this.toggleUpdatingCard}
                  toggleEditingCard={this.toggleEditingCard}
                />
              </HideElements>
            </Fragment>
          ) : (
            <Fragment>
              <Subheader size="12px" font="Bold" margin="10px 0 0 0" dark>
                Your saved card details
              </Subheader>
              <MutedText margin="3px 0 25px 0">
                Payments securly processed by Stripe over an SSL encrypted connection.
                We do not see, or save your credit card details.
              </MutedText>
              <InputIconWrap margin="35px 35px 0 35px" iconLeft="7px">
                <StyledInput
                  value={`${stripeCard.brand} **** **** **** ${stripeCard.last4}`}
                  margin="0 auto"
                  width="100%"
                  disabled
                />
                <Icon icon="Card" height="22px" />
              </InputIconWrap>
              <PillButton
                med
                bordered
                type="button"
                onClick={() => {}}
              >
                Update Card
              </PillButton>
            </Fragment>
          )}
        </ProfileCard>
      </CardItem>
    )
  }
}

ProfileBilling.propTypes = {
  style: PropTypes.object.isRequired,
}

export default ProfileBilling

export const HideElements = styled.div`
  opacity: 1;
  visibility: visible;
  ${props => props.hidden && `
    opacity: 0;
    visibility: hidden;
  `}
`
