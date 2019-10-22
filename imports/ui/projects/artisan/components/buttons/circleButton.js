import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import Icon from '../../../../icons/icon'

const CircleButton = (props) => {
  const { action, select, icon, text, noAnimate } = props
  const updatedProps = { ...props }
  delete updatedProps.action
  return (
    <CircleBtn onClick={action} className={noAnimate && 'noAnimate'} {...updatedProps}>
      <Circle {...updatedProps}>
        <Icon
          icon={icon}
          height="100%"
          width="100%"
          color={select ? 'rgba(255,255,255,0.8)' : 'white'}
        />
      </Circle>
      {text && <p>{text}</p>}
    </CircleBtn>
  )
}

CircleButton.propTypes = {
  icon: PropTypes.string.isRequired,
  action: PropTypes.func,
  text: PropTypes.string,
  select: PropTypes.bool,
  noAnimate: PropTypes.bool,
}

CircleButton.defaultProps = {
  action: () => {},
  text: '',
  noAnimate: false,
  select: false,
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`

const CircleBtn = styled.button`
  position: ${props => props.position ? props.position : 'absolute'};
  z-index: 100;
  top: ${props => props.top && props.top};
  right: ${props => props.right && props.right};
  left: ${props => props.left && props.left};
  bottom: ${props => props.bottom && props.bottom};
  text-align: center;
  visibility: hidden;
  animation: 0.5s ${fadeIn} ease-out 0.7s;
  animation-fill-mode: forwards;
  p {
    ${props => props.type === 'inlineText'
      && `
        display: inline-block;
        font-family: 'aileron-bold'
      `};
    color: ${props => props.color ? props.color : props.type === 'inlineText' ? '#4A4A4A' : '#FFF'};
    margin: ${props => props.type === 'inlineText' ? '0 0 0 7px' : '5px 0'};
    
  }
  &.noAnimate {
    opacity: 1;
    visibility: visible;
    animation: none;
  }
`

export const Circle = styled.div`
  ${props => props.type === 'inlineText' && 'display: inline-block'};
  width: ${props => props.width ? props.width : props.type === 'inlineText' ? '25px' : '35px'};
  height: ${props => props.height ? props.height : props.type === 'inlineText' ? '25px' : '35px'};
  border-radius: 50%;
  background-color: ${props => props.background ? props.background : '#134420'};
  padding: ${props => props.type === 'inlineText' ? '7px' : '8px'};
  margin: 0 auto;
  transition: all 1s;
  ${props => props.select && 'border: 2px solid rgba(255,255,255,0.8);'}
  ${props => props.shadow && 'box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);'}
  svg {
    ${props => props.type === 'inlineText' && `
      position: relative;
      top: -3px;
    `}
  }
`

export default CircleButton
