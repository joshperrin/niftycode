import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

import PillButton from '../../components/buttons/pillBtn'
import FieldWithErrorMsg from '../../components/forms/fieldWithErrorMsg'
import { StyledForm } from '../../components/forms/forms'
import { CardItem, ProfileCard } from '../../components/cards/cards'
import { Header, Subheader, MutedText } from '../../components/headers'

const ProfileAccountant = ({ pendingAccountant, accountantName, style }) => (
  <CardItem style={style} position="absolute" top="0" right="0">
    <ProfileCard>
      <Header size="16px" font="ExtraBold" space="0" color="#380036" textAlign="left">
        Accountant
      </Header>
      {pendingAccountant ? (
        <Fragment>
          <Subheader size="12px" font="Bold" margin="10px 0 0 0" dark>
            Pending Accountant Invitation
          </Subheader>
          <MutedText margin="4px 0 0 0">
            Your invitaiton has been sent to your accountants email, and is awaiting their approval
          </MutedText>
          <Subheader size="12px" margin="35px 0 0 0" dark center>
            Pending Accountant
          </Subheader>
          <Subheader size="14px" font="Bold" margin="0" dark center>
            {accountantName}
          </Subheader>
          <PillButton
            type="button"
            margin="5px auto 0 auto"
            med
            bordered
            onClick={() => {}}
          >
            Cancel Invite
          </PillButton>
        </Fragment>
      ) : (
        <Fragment>
          <Subheader size="12px" font="Bold" margin="10px 0 0 0" dark>
          Invite your accountant to collaborate
          </Subheader>
          <MutedText margin="4px 0 0 0">
            They must be a member of Bluebird, if they are not, please ask them to request an accountant account.
            Your accountant will have access to all of your data, and be able to edit it.
          </MutedText>
          <Formik
            initialValues={{ email: '' }}
            onSubmit={() => {}}
            render={props => (
              <StyledForm noValidate margin="20px 35px">
                <FieldWithErrorMsg
                  input={{
                    type: 'email',
                    name: 'email',
                    label: 'Accoutant’s Bluebird Email',
                    placeholder: 'enter email address',
                    size: 'small',
                  }}
                  {...props}
                />
                <PillButton type="submit" margin="5px auto 0 auto" med bordered>
                  Send Invite
                </PillButton>
              </StyledForm>
            )}
          />
        </Fragment>
      )}
    </ProfileCard>
  </CardItem>
)

export default ProfileAccountant

ProfileAccountant.propTypes = {
  style: PropTypes.object,
  pendingAccountant: PropTypes.bool,
  accountantName: PropTypes.string,
}

ProfileAccountant.defaultProps = {
  style: {},
  pendingAccountant: false,
  accountantName: '',
}
