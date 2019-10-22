import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import delay from 'delay'
import { Field } from 'formik'

import DollarSign from './dollarSign'
import PostFix from './inputPostfix'
import { StyledLabel, InputLabel } from './inputs'


const InputField = ({
  autoFocus, slim, input: { name, label, width, currency, postfix, className, type, placeholder },
}) => {
  const inputRef = useRef()
  // Kind of hacky, add delay to wait for animation to complete before focusing input
  // would be better to figure out how to pass animation callback down from parent component
  useEffect(() => {
    if (autoFocus) {
      (async () => {
        await delay(700)
        inputRef.current.focus()
      })()
    }
  }, [autoFocus])
  return (
    <StyledLabel htmlFor={name} inline width={width} slim={slim}>
      <InputLabel>{label}</InputLabel>
      {currency && <DollarSign slim={slim} />}
      <Field
        type={type}
        name={name}
        innerRef={inputRef}
        placeholder={placeholder}
        className={`StyledField ${className || ''} ${slim && 'slim'}`}
      />
      {postfix && <PostFix slim={slim} text={postfix} />}
    </StyledLabel>
  )
}

InputField.propTypes = {
  input: PropTypes.object.isRequired,
  slim: PropTypes.bool,
  autoFocus: PropTypes.bool,
}

InputField.defaultProps = {
  slim: false,
  autoFocus: false,
}

export default InputField
