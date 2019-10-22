import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Icon from '../../../../icons/icon'

const BigIconButton = ({ content }) => (
  <BigIconBtn>
    <IconBox>
      <Icon icon={content.icon} width={content.iconSize} height={content.iconSize} color="white" />
    </IconBox>
    <ButtonTitle>{content.title}</ButtonTitle>
  </BigIconBtn>
)

export default BigIconButton

BigIconButton.propTypes = {
  content: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    iconSize: PropTypes.string,
  }).isRequired,
}

const BigIconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 90%;
  overflow: hidden;
  background: #FFFFFF;
  margin: 0 auto;
  padding: 0;
  border: 0;
  box-shadow: 4px 4px 30px 0 rgba(50,50,50, 0.95);
  border-radius: 6px;
  -webkit-font-smoothing: subpixel-antialiased;
  cursor: pointer;
`

const IconBox = styled.div`
  display: flex;
  flex: 60px 0 0;
  align-items: center;
  justify-content: center;
  height: 75px;
  background: #50A751;
`

const ButtonTitle = styled.p`
  font-family: aileron-bold;
  font-size: 13px;
  color: #4A4A4A;
  text-align: left;
  margin: 0;
  padding-left: 15px;
  flex-grow: 1;
  white-space: pre-wrap
`
