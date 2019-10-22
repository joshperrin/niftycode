import React from 'react'
import PropTypes from 'prop-types'

import icons from './iconPaths'


const Icon = (props) => {
  const {
    width,
    height,
    icon,
    color,
    className,
  } = props

  const transform = () => {
    if (icon === 'arrow-up') return 'rotate(-90)'
    if (icon === 'arrow-left') return 'rotate(-180)'
    if (icon === 'chevron-left') return 'rotate(180)'
    if (icon === 'chevron-down') return 'rotate(90)'
    return ''
  }

  const iconName = () => icon.split('-')[0]

  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: color,
    },
  }

  return (
    <svg
      className={className}
      style={styles.svg}
      width={`${width}`}
      height={`${height}`}
      viewBox={icons[iconName()].viewBox}
      transform={transform()}
    >
      <path
        style={styles.path}
        d={icons[iconName()].path}
      />
    </svg>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
}

Icon.defaultProps = {
  width: '35px',
  height: '35px',
  color: '',
  className: '',
}

export default Icon
