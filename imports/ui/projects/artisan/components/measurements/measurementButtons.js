import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Icon from '../../../../icons/icon'
import SelectedLabel from '../selectedLabel'

const measurements = [
  { name: 'Count', subtitle: 'Five or Ten', icon: 'items', size: { large: '50px', small: '25px' } },
  { name: 'Length', subtitle: 'Feet or Meters', icon: 'ruler', size: { large: '45px', small: '25px' } },
  { name: 'Weight', subtitle: 'Pounds or Grams', icon: 'weight', size: { large: '48px', small: '23px' } },
  { name: 'Volume', subtitle: 'Quarts or Litres', icon: 'bottle', size: { large: '52px', small: '27px' } },
]

const MeasurementButtons = ({ selected, selectMeasure, small }) => (
  <div>
    {measurements.map(measure => (
      <Rectangle
        key={measure.name}
        onClick={() => selectMeasure(measure.name)}
        className={selected === measure.name ? 'selected' : ''}
        small={small}
      >
        {selected === measure.name && <SelectedLabel />}
        <p>{`By ${measure.name}`}</p>
        <Icon
          icon={measure.icon}
          width={small ? measure.size.small : measure.size.large}
          height={small ? measure.size.small : measure.size.large}
        />
        <span>{measure.subtitle}</span>
      </Rectangle>
    ))}
  </div>
)

export default MeasurementButtons

MeasurementButtons.propTypes = {
  selected: PropTypes.string.isRequired,
  selectMeasure: PropTypes.func.isRequired,
  small: PropTypes.bool,
}

MeasurementButtons.defaultProps = {
  small: false,
}


const Rectangle = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.small ? '85px' : '125px'};
  height: ${props => props.small ? '85px' : '125px'};
  background: rgba(80,167,81,0.25);
  text-align: center;
  margin: ${props => props.small ? '10px 7px 0 7px' : '0 10px'};
  border-radius: 10px;
  vertical-align: top;
  cursor: pointer;
  transition: all 1s;
  &:hover {
    background: #50A751;
    p, span { color: #FFF; }
    path { fill: #FFF; }
  }
  &:first-child { margin-left: 0; }
  &:last-child { margin-right: 0; }
  &.selected {
    background: #50A751;
    p, span { color: #FFF; }
    path { fill: #FFF; }
  }
  p {
    color: #4A4A4A;
    font-size: ${props => props.small ? '13px' : '16px'};
    margin: 10px auto 10px auto;
    transition: all 1s;
  }
  svg {
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-53%, -50%);
  }
  path {
    fill: #4A4A4A;
    transition: all 1s;
  }
  span {
    position: absolute;
    bottom: 7px;
    left: 0;
    right: 0;
    display: block;
    color: #4A4A4A;
    font-size: ${props => props.small ? '9px' : '11px'};
    font-family: 'Aileron-Regular';
    transition: all 1s;
  }
`
