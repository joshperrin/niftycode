import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../../../../icons/icon'


const MeasureLabel = ({ icon, small }) => {
  const iconState = small ? 'small' : 'large'
  const modifiedState = ['bottle', 'weight'].includes(icon) ? `${iconState}X` : iconState
  const iconSize = { largeX: '62px', large: '40px', smallX: '27px', small: '19px' }
  return (
    <Circle className={icon} small={small}>
      <Icon
        icon={icon}
        width={iconSize[modifiedState]}
        height={iconSize[modifiedState]}
        color="#FFF"
      />
    </Circle>
  )
}

MeasureLabel.propTypes = {
  icon: PropTypes.string.isRequired,
  small: PropTypes.bool,
}

MeasureLabel.defaultProps = {
  small: false,
}

export default MeasureLabel

const Circle = styled.div`
  display: inline-block;
  width: ${props => props.small ? '33px' : '75px'};
  height: ${props => props.small ? '33px' : '75px'};
  border-radius: 50%;
  overflow: hidden;
  background: #134420;
  text-align: center;
  border: ${props => props.small ? '2px' : '5px'} solid #FFFFFF;
  svg {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  &.bottle, &.weight {
    svg {
      top: 60%;
    }
  }
`
