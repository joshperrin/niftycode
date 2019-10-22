import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import Yup from 'yup'

import { PillButton } from '../buttons/buttons'
import { StyledForm } from './inputs'
import FieldWithErrorMsg from './fieldWithErrorMsg'

const EmailForm = ({ btnText, onSubmit }) => (
  <Formik
    enableReinitialize
    initialValues={{ email: '' }}
    onSubmit={onSubmit}
    validationSchema={
      Yup.object().shape({
        email: Yup.string().email('Please enter valid email').required('Oops, email is required'),
      })
    }
    render={props => (
      <StyledForm noValidate space="20px auto 40px auto">
        <FieldWithErrorMsg
          autoFocus
          input={{
            type: 'email',
            name: 'email',
            placeholder: 'enter your email',
            icon: 'envelope',
          }}
          {...props}
        />
        <PillButton type="submit" disabled={props.isSubmitting}>
          {btnText}
        </PillButton>
      </StyledForm>
    )}
  />
)

EmailForm.propTypes = {
  btnText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default EmailForm
