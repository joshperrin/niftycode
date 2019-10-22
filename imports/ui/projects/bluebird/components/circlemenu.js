import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { CircleMenu, CircleButton, Circle } from './menus/circlemenu'

const CircleMenuComponent = ({ items }) => (
  <CircleMenu>
    {items.length > 0 && items[0]._id && items.map(({ _id, url, abbr, title }) => (
      <li key={_id}>
        <NavLink to={url || ''}>
          <CircleButton>
            <Circle size="40px">{abbr}</Circle>
            <p>{title}</p>
          </CircleButton>
        </NavLink>
      </li>
    ))}
  </CircleMenu>
)

export default CircleMenuComponent

CircleMenuComponent.propTypes = {
  items: PropTypes.array.isRequired,
}
