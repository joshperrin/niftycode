import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'

import Icon from '../../../../icons/icon'
import TriangleDown from '../shapes/triangleDown'

class DropDown extends PureComponent {
  state = { openDropdown: false }

  render () {
    const { options, action, title, selected, icon, disabled, insideInput } = this.props
    const { openDropdown } = this.state
    return (
      <DropDownWrap insideInput={insideInput}>
        <DropDownTitle>{title}</DropDownTitle>
        <DropDownBox
          type="button"
          disabled={disabled}
          onClick={() => this.setState(({ openDropdown }) => ({ openDropdown: !openDropdown }))}
        >
          {selected}
          { icon && <Icon icon={icon} width="15px" height="15px" /> }
          {!disabled && (
            <TriangleDown width="7px" height="7px" />
          )}
        </DropDownBox>
        <DropDownOptions className={openDropdown ? 'isOpen' : ''}>
          {options.map((value => (
            value !== selected && (
              <li key={value}>
                <button
                  type="button"
                  onClick={() => {
                    action(value)
                    this.setState({ openDropdown: false })
                  }}
                >
                  {value}
                </button>
              </li>
            )
          )))}
        </DropDownOptions>
      </DropDownWrap>
    )
  }
}

DropDown.propTypes = {
  selected: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  action: PropTypes.func.isRequired,
  insideInput: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.string,
}

DropDown.defaultProps = {
  insideInput: false,
  disabled: false,
  title: '',
  icon: '',
}

export default DropDown

export const DropDowns = styled.div`
`

const DropDownTitle = styled.p`
  position: absolute;
  top: -18px;
  right: 0;
  font-size: 14px;
  margin: 0;
  text-align: right;
  color: #4A4A4A;
  font-family: aileron-bold;
`

const DropDownBox = styled.button`
  position: relative;
  border: 3px solid #50A751;
  border-radius: 5px;
  font-family: aileron-bold;
  color: white;
  background: #50A751;
  margin-top: 5px;
  padding: 6px 10px;
  width: 100%;
  text-align: left;
  font-size: 15px;
  justify-content: left;
  transition: border 1s;
  &:hover {
    border: 3px solid #317C32;
  }
  &:disabled {
    border: 3px solid #50A751;
    cursor: auto;
  }
  svg {
    fill: #FFF;
    margin-left: 15px;
    margin-bottom: 3px;
  }
  ${TriangleDown} {
    display: inline-block;
    position: absolute;
    top: 13px;
    right: 10px;
  }
`

const DropDownOptions = styled.ul`
  position: absolute;
  top: 30px;
  right: 3px;
  left: 18px;
  z-index: 100;
  max-height: 0;
  overflow: hidden;
  list-style: none;
  padding: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: rgba(255,255,255,0.98);
  transition: max-height .6s;
  &.isOpen {
    max-height: 275px;
  }
  li {
    position: relative;
    height: 35px;
    text-align: left;
    text-align: left;
    border-bottom: 2px solid rgba(74,74,74,0.17);
    transition: background .5s;
    &:last-child {
      border-bottom: 0;
    }
    &:hover {
      background: #EAEAEA;
    }
    button {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      text-align: left;
      justify-content: left;
      font-family: aileron-bold;
      font-size: 12px;
      color: #4A4A4A;
    }
  }
`

const DropDownWrap = styled.div`
  position: ${props => props.insideInput ? 'absolute' : 'relative'};
  ${props => props.insideInput && `
    top: 20px;
    right: 0;
    ${DropDownBox} {
      z-index: 200;
      height: 47px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    ${DropDownOptions} {
      top: 34px;
      background: #F2F2F2;
      &:hover {
        background: ${darken(0.2, '#F2F2F2')};
      }
    }
    ${TriangleDown} {
      top: 19px;
    }
  `}
  display: inline-block;
  width: ${props => props.insideInput ? '125px' : '50%'};
  padding-left: 15px;
  vertical-align: top;
`
