import styled from 'styled-components'
import { lighten } from 'polished'

export const PillButton = styled.button`
  display: block;
  background: ${props => props.background ? props.background : '#4A4A4A'};
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.20);
  border-radius: 82px;
  margin: ${props => props.top ? props.top : '0'} auto ${props => props.withSpace ? '35px' : '0'} auto;
  width: ${props => props.width ? props.width : '225px'};
  padding: 10px;
  font-family: aileron-bold;
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;
  transition: all 0.5s;
  &:hover {
    background: ${props => props.background ? lighten('0.1', props.background) : '#333333'};
    transform: scale(1.03);
  }
`

export const LinkButton = styled.button`
  display: inline-block;
  font-family: ${props => props.font ? `aileron-${props.font}` : 'aileron-bold'};
  font-size: ${props => props.fontSize ? props.fontSize : '11px'};
  color: ${props => props.color ? props.color : '#4A4A4A'};
  margin: ${props => props.margin ? props.margin : '0 auto'};
  text-align: center;
`
