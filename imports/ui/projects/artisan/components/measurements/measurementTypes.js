import React from 'react'
import styled from 'styled-components'

import Icon from '../../../../icons/icon'
import SelectedLabel from '../selectedLabel'
import measureIcon from './icons'

const MeasurementTypes = ({ measurements, type, selectMeasurement, selected }) => (
  measurements.map(measure => (
    <Rectangle
      key={measure}
      type="button"
      onClick={() => selectMeasurement(measure)}
      className={selected === measure ? 'selected' : ''}
    >
      {selected === measure && <SelectedLabel size="18" />}
      <Icon icon={measureIcon[type]} className="measureIcon" width="20px" height="20px" />
      <p>{measure}</p>
    </Rectangle>
  ))
)

export default MeasurementTypes

const Rectangle = styled.button`
  position: relative;
  display: inline-block;
  width: 105px;
  height: 35px;
  background: rgba(80,167,81,0.25);
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  text-align: left;
  font-size: 14px;
  &.selected {
    background: #50A751;
    p { color: #FFF; }
    path { fill: #FFF; }
  }
  .measureIcon {
    position: absolute;
    top: 7px;
    left: 7px;
    fill: #4A4A4A;
  }
  p {
    text-align: center;
    padding-left: 17px;
    margin: 0;
    font-family: Aileron-Bold;
    font-size: 12px;
    color: #4A4A4A;
    letter-spacing: 0.3px;
  }
`
