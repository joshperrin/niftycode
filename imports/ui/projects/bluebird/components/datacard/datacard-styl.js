import styled from 'styled-components'
import { animated } from 'react-spring/renderprops.cjs'

import { CircleIcon, IconBtnStyles } from '../buttons/iconBtn'
import { Card2 } from '../cards/cards'

export const DataCardWrapper = styled(Card2)`
  position: absolute;
  ${props => props.top && `top:${props.top}`}
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  max-width: ${props => props.maxwidth ? props.maxwidth : '700px'};
  min-height: 500px;
  margin: ${props => props.margin ? props.margin : '0 auto 35px auto'};
  background: ${props => props.background ? props.background : ''};
  @media print {
    box-shadow: none;
  }
`

export const DataAction = styled.button`
  position: absolute;
  top: 10px;
  right: 6px;
  cursor: ${props => props.complete ? 'auto' : 'pointer'};
  &:hover {
    svg { fill: #50E3C2; }
  }
  svg {
    fill: ${props => props.complete ? '#50E3C2' : '#4A4A4A'};
    transition: all 0.5s;
  }
  p {
    font-family: Metropolis-Black;
    padding-left: 7px;
    font-size: 11px;
    color: #4A4A4A;
    margin: 0;
  }
`

export const DataCardMenu = styled(animated.ul)`
  position: absolute;
  top: 12px;
  left: 12px;
  @media print {
    display: none;
  }
  li {
    font-family: Metropolis-ExtraBold;
    text-align: left;
    &:first-child {
      color: rgba(74,74,74,0.65);
      font-size: 12px;
      margin-bottom: 11px;
      &:after {
        content: "";
        display: block;
        margin-top: 3px;
        width: 15px;
        height: 3px;
        background: #979797;
      }
    }
    button {
      color: #4A4A4A;
      text-align: left;
      font-size: 12px;
      padding: 0;
      margin-bottom: 8px;
      font-family: Metropolis-ExtraBold;
      transition: all 0.5s;
      &:hover {
        color: #50E3C2;
      }
    }
  }
`

export const DataDetails = styled.p`
  font-family: Metropolis-Bold;
  font-size: 11px;
  color: ${props => props.color ? props.color : '#4A4A4A'};
  margin: 0 0 6px 0;
  text-align: center;
  span {
    opacity: 0.63;
    font-size: 9px;
    margin-right: 5px;
  }
`

export const DataSection = styled.div`
  margin: 40px 0 30px 0;
`

export const DataItem = styled.div`
  width: 90%;
  height: 60px;
  margin: 0 auto 15px auto;
  padding: 10px;
  text-align: left;
  border-radius: 5px;
  background: rgba(204,211,216,0.45);
  box-shadow: 0 2px 2px 0 rgba(74,74,74,0.44);
  cursor: pointer;
  &:first-child {
    margin-top: 40px;
  }
  &:hover {
    ${IconBtnStyles} {
      transform: translateX(5px);
    }
    ${CircleIcon} {
      background: #380036;
      transform: translateX(5px);
    }
  }
`

export const DataField = styled.div`
  display: inline-block;
  margin: 0 ${props => props.right ? props.right : '10px'} 0 0;
  vertical-align: top;
  padding-top: ${props => props.top && props.top};
  span {
    position: relative;
    top: -2px;
    opacity: 0.6;
    font-family: Metropolis-Black;
    font-size: 9px;
    margin: -10px 3px;
    color: #4A4A4A;
  }
`

export const DataLabel = styled.div`
  opacity: 0.6;
  font-family: Metropolis-Black;
  font-size: 9px;
  color: #4A4A4A;
  margin-bottom: 3px;
  text-align: inherit;
`

export const DataValue = styled.div`
  font-family: Metropolis-ExtraBold;
  font-size: ${props => props.fontSize ? props.fontSize : '14px'};
  color: #4A4A4A;
  text-align: left;
  /* line-height: 1.3; */
  padding-top: ${props => props.top && props.top};
`

export const DataItemAction = styled.div`
  float: right;
`

export const DataFieldContainer = styled.div`
  float: right;
  text-align: right;
  ${DataField} {
    margin: 0 0 0 32px;
    padding-top: 9px;
  }
  ${DataValue} {
    font-size: 10px;
    text-align: right;
  }
  ${DataLabel} {
    text-align: right;
    text-transform: uppercase;
  }
`
