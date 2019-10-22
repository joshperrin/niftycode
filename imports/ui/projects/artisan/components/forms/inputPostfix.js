import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Postfix = ({ slim, text }) => (
  <Square slim={slim}>
    {text}
  </Square>
)

export default Postfix

Postfix.propTypes = {
  slim: PropTypes.bool,
  text: PropTypes.string.isRequired,
}

Postfix.defaultProps = {
  slim: false,
}

const Square = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 25px;
  bottom: 0;
  right: 0;
  font-family: aileron-bold;
  color: white;
  width: auto;
  padding: 0 20px;
  height: ${props => props.slim ? '35px' : '48px'};
  background: #50A751;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`
