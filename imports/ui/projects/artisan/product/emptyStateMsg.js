import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MeasurementContainer from '../components/measurements'
import { Header, Subheader } from '../components/headers'


const EmptyStateMsg = ({ title, measurements, msg }) => (
  <Wrapper>
    <Header size="24px" font="Black" dark>
      {title}
    </Header>
    {measurements && <MeasurementContainer />}
    <Subheader size="16px" font="Bold" bottom="30px" maxWidth="320px" dark withSpace>
      {msg}
    </Subheader>
  </Wrapper>
)

const Wrapper = styled.div`
  margin: 40px auto;
`

export default EmptyStateMsg

EmptyStateMsg.propTypes = {
  measurements: PropTypes.bool,
  title: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
}

EmptyStateMsg.defaultProps = {
  measurements: false,
}
