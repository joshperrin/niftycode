import React from 'react'
import PropTypes from 'prop-types'
import isObject from 'lodash/isObject'
import { Transition, config } from 'react-spring/renderprops.cjs'

import { StyledLabel, ErrorMessage, InputLabel, StyledField } from './inputs'

const FieldWithErrorMsg = ({ input, touched, errors, status, disabled, onBlur }) => (
  <StyledLabel
    htmlFor={input.name}
    inline={input.inline}
    width={input.width}
    disabled={disabled}
    display={input.display}
    padding={input.padding}
    light={input.light}
    className={input.lastItem && 'last'}
  >
    <Transition
      native
      items={
        (touched[input.name] && errors[input.name])
        || (status && status[input.name])
      }
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={config.fast}
    >
      {toggle => toggle
        ? sty => (
          <ErrorMessage style={sty}>
            {status && status[input.name]
              ? status[input.name]
              : errors[input.name]}
          </ErrorMessage>
        )
        : sty => <InputLabel style={sty}>{input.label}</InputLabel>
      }
    </Transition>
    {input.component !== 'select' ? (
      <StyledField
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        error={touched[input.name] && errors[input.name]}
        size={input.size}
        disabled={disabled}
        onBlur={onBlur}
      />
    ) : (
      <StyledField
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        error={touched[input.name] && errors[input.name]}
        component={input.component}
        onBlur={onBlur}
      >
        {input.component === 'select'
          && input.options.map(option => isObject(option) ? (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ) : (
            <option key={option}>{option}</option>
          ))}
      </StyledField>
    )}
  </StyledLabel>
)

FieldWithErrorMsg.propTypes = {
  input: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onBlur: PropTypes.func,
  status: PropTypes.object,
  disabled: PropTypes.bool,
}

FieldWithErrorMsg.defaultProps = {
  status: {},
  disabled: false,
  onBlur: null,
}

export default FieldWithErrorMsg
