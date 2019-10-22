import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon from '../../../../icons/icon'

const TabButton = ({
  action, icon, mainText, actionText,
}) => (
  <Tab onClick={action}>
    <Icon icon={icon} height="20px" color="#4A4A4A" />
    <MainText>{mainText}</MainText>
    <ActionText>{actionText}</ActionText>
  </Tab>
)

TabButton.propTypes = {
  action: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
}

const Tab = styled.button`
  display: inline-block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 250px;
  background-color: rgba(80,167,81, 0.35);
  padding: 5px 8px;
  text-align: left;
  transition: background-color 0.5s;
  &:hover {
    background-color: rgba(80,167,81, 0.6);
  }
`

const MainText = styled.p`
  position: relative;
  top: 2px;
  display: inline-block;
  margin: 0;
  font-family: 'aileron-bold';
  font-size: 11px;
  color: #4A4A4A;
`

const ActionText = styled(MainText)`
  right: -92px;
  font-size: 10px;
`

export default TabButton
