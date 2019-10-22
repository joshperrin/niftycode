import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Icon from '../../../../icons/icon'


const DollarSign = ({ slim }) => (
  <Square slim={slim}>
    <Icon
      icon="dollarSign"
      width={slim ? '16px' : '20px'}
      height={slim ? '16px' : '20px'}
      color="#FFF"
    />
  </Square>
)

export default DollarSign

DollarSign.propTypes = {
  slim: PropTypes.bool,
}

DollarSign.defaultProps = {
  slim: false,
}

const Square = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${props => props.slim ? '35px' : '45px'};
  height: ${props => props.slim ? '35px' : '48px'};
  background: #50A751;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  svg {
    position: absolute;
    top: ${props => props.slim ? '45%' : '50%'};
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
