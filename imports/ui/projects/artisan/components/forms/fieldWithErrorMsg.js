import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Transition, config } from 'react-spring/renderprops.cjs'
import { Field } from 'formik'
import delay from 'delay'

import Icon from '../../icons/icon'
import DollarSign from './dollarSign'
import {
  StyledLabel, ErrorMessage, InputLabel, StyledField,
} from './inputs'


class FieldWithErrorMsg extends PureComponent {
  componentDidMount = async () => {
    // Kind of hacky, add delay to wait for animation to complete before focusing input
    // would be better to figure out how to pass animation callback down from parent component
    const { autoFocus } = this.props
    if (autoFocus) {
      await delay(700)
      this.input.focus()
    }
  }

  render () {
    const { two, input, touched, errors, status } = this.props

    return (
      <StyledLabel htmlFor={input.name} inline width={input.width} two={two}>
        <Transition
          native
          items={(touched[input.name] && errors[input.name]) || (status && status[input.name])}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={config.fast}
        >
          {toggle => toggle ? sty => (
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
          <Fragment>
            {input.currency && <DollarSign />}
            <Field
              className={`StyledField ${input.className}`}
              innerRef={(input) => { this.input = input }}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              error={touched[input.name] && errors[input.name]}
            />
          </Fragment>
        ) : (
          <StyledField
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            error={touched[input.name] && errors[input.name]}
            component={input.component}
          >
            {input.component === 'select'
              && input.options.map(option => <option key={option}>{option}</option>)}
          </StyledField>
        )}
        {input.icon && <Icon icon={input.icon} height="25px" color="#4A4A4A" className="input-icon" />}
      </StyledLabel>
    )
  }
}

FieldWithErrorMsg.propTypes = {
  input: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  status: PropTypes.object,
  two: PropTypes.bool,
  autoFocus: PropTypes.bool,
}

FieldWithErrorMsg.defaultProps = {
  status: {},
  two: false,
  autoFocus: false,
}

export default FieldWithErrorMsg
