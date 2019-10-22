import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Meteor } from 'meteor/meteor'

import Page from '../components/page'
import ProfileGrid from './profileGrid'
import IconBtn from '../components/buttons/iconBtn'
import { Header } from '../components/headers'
import { Cards } from '../components/cards/cards'


class Profile extends PureComponent {
  state = { profileState: 'grid' }

  toggleChoosePlan = () => this.setState(({ profileState }) => ({
    profileState: profileState === 'grid' ? 'choosePlan' : 'grid',
  }));

  toggleEditInfo = () => this.setState(({ profileState }) => ({
    profileState: profileState === 'grid' ? 'editInfo' : 'grid',
  }));

  render() {
    const { profileState } = this.state
    const { styles, history, pageTransitionRef } = this.props
    return (
      <Page style={styles}>
        <Header size="18px" font="Black" space="30px" topSpace="10px" dark uppercase>
          Profile
        </Header>
        <IconBtn
          icon="Logout"
          btnText="Logout"
          onClick={() => {
            Meteor.logout()
            history.push('/')
          }}
          iconSize="30px"
          topRight
        />
        <Cards>
          <ProfileGrid
            profileState={profileState}
            toggleChoosePlan={this.toggleChoosePlan}
            toggleEditInfo={this.toggleEditInfo}
            pageTransitionRef={pageTransitionRef}
          />
        </Cards>
      </Page>
    )
  }
}

Profile.propTypes = {
  styles: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  pageTransitionRef: PropTypes.object.isRequired,
}

export default Profile
