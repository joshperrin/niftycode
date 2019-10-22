import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { animated } from 'react-spring/renderprops.cjs'
import Icon from '../../../../icons/icon'

const BackButton = ({ style, action }) => (
  <BackBtn style={style} onClick={action}>
    <Icon icon="back" width="25px" height="25px" color="white" />
      Back
  </BackBtn>
)

BackButton.propTypes = {
  style: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
}

const BackBtn = styled(animated.button)`
  position: fixed;
  top: 35px;
  left: 25px;
  color: #FFF;
  font-family: aileron-heavy;
  text-transform: uppercase;
  font-size: 18px;
  border: 0;
  cursor: pointer;
  svg { margin-right: 10px; }
`

export const BtnTopRight = styled(animated.button)`
  position: fixed;
  top: 38px;
  right: 25px;
  color: #FFF;
  font-family: aileron-regular;
  font-size: 18px;
  border: 0;
  cursor: pointer;
`

export default BackButton
