import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Spinner from './spinner'

const LoadingIcon = ({ text }) => (
  <LoadingWrap>
    <Spinner inline dark small />
    <span>{text}</span>
  </LoadingWrap>
)

export default LoadingIcon

LoadingIcon.propTypes = {
  text: PropTypes.string.isRequired,
}

const LoadingWrap = styled.div`
  text-align: center;
  font-family: Metropolis-Bold;
  padding-top: 30px;
  font-size: 15px;
  color: #4A4A4A;
  vertical-align: middle;
  span {
    position: relative;
    top: -7px;
  }
`
