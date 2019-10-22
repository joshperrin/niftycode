import styled from 'styled-components'

export const Header = styled.h1`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  font-family: ${props => props.font ? `aileron-${props.font}` : 'aileron-regular'};
  font-size: ${props => props.size || '24px'};
  color: ${props => props.color ? props.color : props.dark ? '#4A4A4A' : 'white'};
  margin-top: ${props => props.top && props.top};
  margin-bottom: ${props => props.bottom && props.bottom};
  margin-left: ${props => props.left && props.left};
  text-align: ${props => props.align ? props.align : 'center'};
  letter-spacing: 1px;
  &:after {
    ${props => props.underline && 'display: block'};
    ${props => props.underline && 'margin: 10px auto 0 auto'};
    ${props => props.underline && 'content: ""'};
    ${props => props.underline && 'width: 50px'};
    ${props => props.underline && 'height: 3px'};
    background: ${props => props.underline && props.dark ? '#4A4A4A' : 'white'};
  }
`

export const Subheader = styled.h2`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  font-family: ${props => props.font ? `aileron-${props.font}` : 'aileron-regular'};
  font-size: ${props => props.size || '24px'};
  max-width: ${props => props.maxWidth || 'none'};
  color: ${props => props.color ? props.color : props.dark ? '#4A4A4A' : 'white'};
  letter-spacing: ${props => (props.characterSpace ? '2px' : '1px')};
  margin: 0 auto ${props => (props.bottom ? props.bottom : props.withSpace ? '50px' : '0')} auto;
  margin-left: ${props => props.left && props.left};
  text-transform: ${props => (props.allcaps ? 'uppercase' : 'none')};
  text-align: ${props => props.align ? props.align : 'center'};
`

export const SectionHeader = styled.h1`
  position: relative;
  font-family: Arial;
  font-weight: 600;
  font-size: 17px;
  color: #134420;
  padding: 15px;
  margin: 0 auto;
  max-width: 700px;
  text-align: left;
  border-bottom: 2px solid rgba(19,68,32,0.4);
`

export const Text = styled.p`
  display: block;
  font-family: ${props => props.font ? `aileron-${props.font}` : 'aileron-regular'};
  font-size: ${props => props.size || '12px'};
  color: #4A4A4A;
  margin: ${props => props.margin ? props.margin : '0 auto'};
  text-align: ${props => props.align ? props.align : 'center'};
`

export const DetailText = styled.p`
  display: inline-block;
  margin: 0 7px 15px 7px;
  font-family: Arial-BoldMT;
  font-size: 11px;
  color: #948F96;
  span {
    color: rgba(74,74,74, 0.8)
  }
`
