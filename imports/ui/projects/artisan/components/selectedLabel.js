import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../../../icons/icon'


const SelectedLabel = ({ size }) => (
  <Circle size={size}>
    <Icon
      icon="checkmark"
      color="#4A4A4A"
      width={size ? `${size / 2}px` : '10px'}
      height={size ? `${size / 2}px` : '10px'}
    />
  </Circle>
)

export default SelectedLabel

SelectedLabel.propTypes = {
  size: PropTypes.string,
}

SelectedLabel.defaultProps = {
  size: null,
}

const Circle = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  width: ${props => props.size ? `${props.size}px` : '23px'};
  height: ${props => props.size ? `${props.size}px` : '23px'};
  background: #FFFFFF;
  border-radius: 50%;
  border: 2px solid #4A4A4A;
  text-align: center;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    fill: #4A4A4A;
  }
`
