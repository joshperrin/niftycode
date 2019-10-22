/* eslint react/destructuring-assignment: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PillButton from '../buttons/pillBtn'
import { StyledLabel, InputLabel, InputWrapper } from '../forms/inputs'

class StripeForm extends React.Component {
  render() {
    const { noLabel, medButton, margin } = this.props
    return (
      <StyledForm margin={margin} onSubmit={this.handleSubmit}>
        <StyledLabel>
          {!noLabel && (
            <InputLabel>
              Card Details
            </InputLabel>
          )}
          <InputWrapper />
        </StyledLabel>
        <PillButton type="submit" med={medButton} bordered>
          Add Card
        </PillButton>
      </StyledForm>
    )
  }
}

export default StripeForm

StripeForm.propTypes = {
  noLabel: PropTypes.bool,
  medButton: PropTypes.bool,
  margin: PropTypes.string,
}

StripeForm.defaultProps = {
  noLabel: false,
  medButton: false,
  margin: '',
}

const StyledForm = styled.form`
  opacity: ${props => props.hidden ? 0 : '1'};
  margin: ${props => props.margin ? props.margin : '25px auto 15px auto'}
`
