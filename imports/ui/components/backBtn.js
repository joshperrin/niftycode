import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../icons/icon'

const BackButton = ({ history }) => (
  <CircleBtn onClick={() => history.goBack()}>
    <Circle>
      <Icon icon="arrow-left" height="100%" width="100%" color="white" />
    </Circle>
    <p>Back</p>
  </CircleBtn>
)

BackButton.propTypes = {
  history: PropTypes.object.isRequired,
}


const CircleBtn = styled.button`
  position: absolute;
  z-index: 100;
  top: 9px;
  left: 8px;
  text-align: center;
  background: transparent;
  border: none;
  cursor: pointer;
  p {
    display: inline-block;
    font-family: Arial;
    font-size: 13px;
    font-weight: 800;
    color: #4A4A4A;
    margin: 0 0 0 7px;
  }
`

export const Circle = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #4a4a4a;
  padding: 10px 5px 5px 5px;
  margin: 0 auto;
  transition: all 1s;
  svg {
    position: relative;
    top: -3px;
  }
`

export default BackButton
