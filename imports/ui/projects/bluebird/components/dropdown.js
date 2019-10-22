import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Circle from './labels/circle'
import Icon from '../../../icons/icon'
import { CircleIcon } from './buttons/iconBtn'

const DropDown = (props) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const { data: { selected, icon, title, options, right } } = props
  const { abbr = '', subject = '' } = options[selected] || {}
  return (
    <DropDownWrap>
      <DropDownTitle right={right}>
        {title}
      </DropDownTitle>
      <DropDownBox
        onClick={() => setOpenDropdown(!openDropdown)}
        disabled={Object.keys(options).length < 2}
      >
        <Circle bordered width="40px">
          {icon
            ? <Icon icon="Calendar" height="13px" />
            : <span>{abbr}</span>
          }
        </Circle>
        <DropDownItem>
          {subject}
        </DropDownItem>
        {Object.keys(options).length > 1 && (
          <CircleIcon>
            <Icon icon="ChevronDown" width="11px" height="11px" />
          </CircleIcon>
        )}
      </DropDownBox>
      <DropDownOptions className={openDropdown ? 'isOpen' : ''}>
        {Object.entries(options).map(([key, value]) => {
          if (key !== selected) {
            const { subject, abbr } = value
            return (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => {}}
                >
                  <Circle bordered width="40px">
                    {icon
                      ? <Icon icon="Calendar" height="13px" />
                      : <span>{abbr}</span>
                    }
                  </Circle>
                  <DropDownItem>{subject}</DropDownItem>
                </button>
              </li>
            )
          }
          return null
        })}
      </DropDownOptions>
    </DropDownWrap>
  )
}

DropDown.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DropDown

export const DropDowns = styled.div`
  padding-top: 10px;
  max-width: 850px;
  margin: 0 auto 35px auto;
  text-align: center;
  @media print {
    display: none;
  }
`

const DropDownTitle = styled.p`
  font-family: 'Metropolis-Bold';
  font-size: 12px;
  text-transform: uppercase;
  color: rgba(74,74,74,0.64);
  ${props => props.right && 'text-align:right'}
`

const DropDownWrap = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
  padding: 0 30px;
  vertical-align: top;
  text-align: left;
  ${CircleIcon} {
    position: absolute;
    top: 20px;
    right: 10px;
  }
  ${Circle} {
    position: relative;
    text-align: center;
    padding-top: 10px;
    font-size: 11px;
    font-family: 'Metropolis-Bold';
  }
  svg, span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: #FFF;
  }
`

const DropDownBox = styled.button`
  position: relative;
  border: 3px solid #FFF;
  border-radius: 10px;
  background: transparent;
  padding: 10px;
  width: 100%;
  text-align: left;
  transition: background 1s;
  &:hover {
    background: rgba(255,255,255,0.3);
    ${CircleIcon} {
      background: #380036;
    }
  }
  &:disabled {
    background: transparent;
    cursor: auto;
  }
`

const DropDownItem = styled.p`
  display: inline-block;
  font-family: 'Metropolis-ExtraBold';
  margin-top: 17px;
  vertical-align: top;
  height: 14px;
  color: #4A4A4A;
`

const DropDownOptions = styled.ul`
  position: absolute;
  top: 99%;
  right: 35px;
  left: 35px;
  z-index: 100;
  max-height: 0;
  overflow: hidden;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: rgba(255,255,255,0.98);
  transition: max-height .6s;
  &.isOpen {
    max-height: 500px;
  }
  li {
    text-align: left;
    padding: 10px;
    border-bottom: 2px solid rgba(74,74,74,0.17);
    transition: background .5s;
    &:last-child {
      border-bottom: 0;
    }
    &:hover {
      background: #EAEAEA;
    }
    button {
      text-align: left;
      width: 100%;
      height: 100%;
    }
  }
`
