import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MeasureLabel from './measurements/measureLabel'


const MeasurementContainer = ({ fade }) => (
  <Measurements fade={fade}>
    <MeasureLabel icon="items" />
    <MeasureLabel icon="ruler" />
    <MeasureLabel icon="weight" />
    <MeasureLabel icon="bottle" />
  </Measurements>
)

export default MeasurementContainer

MeasurementContainer.propTypes = {
  fade: PropTypes.bool,
}

MeasurementContainer.defaultProps = {
  fade: false,
}

const Measurements = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 25px auto;
  text-align: center;
  ${props => props.fade && 'opacity: 0.5;'}
`
