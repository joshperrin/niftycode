import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon from '../../../../icons/icon'

const SlideButton = ({ action, direction, position, shadow }) => (
  <CircleBtn onClick={action} direction={direction} position={position} shadow={shadow}>
    <Icon icon={direction === 'left' ? 'chevron-left' : 'chevron-right'} height="18px" color="#4A4A4A" />
  </CircleBtn>
)

SlideButton.propTypes = {
  action: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  shadow: PropTypes.bool,
  position: PropTypes.object,
}

SlideButton.defaultProps = {
  shadow: false,
  position: {},
}

const CircleBtn = styled.button`
  position: absolute;
  z-index: 5;
  top: ${props => props.position ? props.position.top : '150px'};
  bottom: ${props => props.position && props.position.bottom};
  left: ${props => props.position && props.position.left};
  right: ${props => props.position && props.position.right};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0;
  background: #D8D8D8;
  transition: all 0.5s;
  ${props => props.shadow && 'box-shadow: 0 2px 5px 0 rgba(60,60,60,0.35)'};
  &:hover {
    background: #CBCBCB;
    box-shadow: 0 1px 7px 0 rgba(60,60,60,0.35);
  }
`

export default SlideButton
