import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import Yup from 'yup'

import { PillButton } from '../buttons/buttons'
import { StyledForm } from './inputs'
import FieldWithErrorMsg from './fieldWithErrorMsg'

const PasswordForm = ({ btnText, onSubmit }) => (
  <Formik
    initialValues={{ password: '' }}
    onSubmit={onSubmit}
    validationSchema={Yup.object().shape({
      password: Yup.string()
        .min(8, 'Password has to be longer than 8 characters')
        .required('Password is required'),
    })}
    render={formProps => (
      <StyledForm noValidate space="20px auto 30px auto">
        <FieldWithErrorMsg
          autoFocus
          input={{
            type: 'password',
            name: 'password',
            placeholder: 'your password',
            icon: 'lock',
          }}
          {...formProps}
        />
        <PillButton type="submit" disabled={formProps.isSubmitting}>
          {btnText}
        </PillButton>
      </StyledForm>
    )}
  />
)

PasswordForm.propTypes = {
  btnText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default PasswordForm
