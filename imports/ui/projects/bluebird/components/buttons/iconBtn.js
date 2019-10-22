import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Icon from '../../../../icons/icon'

const IconBtn = ({ icon, btnText, onClick, iconRight, topRight, iconSize, redIcon }) => (
  <IconBtnStyles onClick={onClick} iconRight={iconRight} topRight={topRight} redIcon={redIcon}>
    <CircleIcon iconRight={iconRight} topRight={topRight} iconSize={iconSize} redIcon={redIcon}>
      <Icon icon={icon} width="11px" height="11px" />
    </CircleIcon>
    <BtnText>{btnText}</BtnText>
  </IconBtnStyles>
)

export default IconBtn

IconBtn.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  btnText: PropTypes.string,
  iconSize: PropTypes.string,
  iconRight: PropTypes.bool,
  topRight: PropTypes.bool,
  redIcon: PropTypes.bool,
}

IconBtn.defaultProps = {
  onClick: () => {},
  btnText: '',
  iconSize: '',
  iconRight: false,
  topRight: false,
  redIcon: false,
}

const BtnText = styled.p`
  display: inline-block;
  font-size: 13px;
  font-family: Metropolis-ExtraBold;
  color: #4a4a4a;
  margin: 3px 15px 0 0;
`

export const CircleIcon = styled.div`
  position: ${props => props.iconRight ? 'absolute' : 'relative'};
  right: ${props => props.iconRight && 0};
  height: ${props => (props.iconSize ? props.iconSize : '25px')};
  width: ${props => (props.iconSize ? props.iconSize : '25px')};
  display: inline-block;
  margin: 0 10px;
  border-radius: 50%;
  background: ${props => props.redIcon ? '#B8020D' : '#50E3C2'};
  border: 1px solid white;
  text-align: center;
  transition: all 1s;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: white;
  }
`

export const IconBtnStyles = styled.button`
  position: ${props => (props.topRight ? 'absolute' : 'relative')};
  ${props => props.topRight && 'top:10px; right:20px;'}
  ${props => props.iconRight && 'padding-right: 30px;'}
  ${props => props.iconOnly && 'float: right'}
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  border: none;
  padding-top: 10px;
  transition: transform 0.5s;
  ${BtnText} {
    ${props => props.iconOnly && 'margin: 0'}
  }
  &:hover {
    transform: translateX(5px);
    ${CircleIcon} {
      background: ${props => props.redIcon ? '#6C0000' : '#380036'};
      transform: translateX(5px);
    }
  }
`
