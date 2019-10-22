/* eslint no-nested-ternary: 0 */
import styled from 'styled-components'


export const Header = styled.h1`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  font-family: ${props => (props.font ? `Metropolis-${props.font}` : 'Metropolis-Regular')};
  font-size: ${props => props.size || '24px'};
  text-transform: ${props => props.uppercase && 'uppercase'};
  color: ${props => (props.color ? props.color : props.dark ? '#4A4A4A' : 'rgba(255, 255, 255, 0.75)')};
  margin: ${props => props.space ? `${props.space} 0` : '15px 0'};
  margin: ${props => props.margin && props.margin};
  margin-top: ${props => props.topSpace && props.topSpace};
  letter-spacing: ${props => props.letterspacing ? props.letterspacing : '1px'};
  text-align: ${props => props.textAlign && props.textAlign};
  span {
    font-family: 'Metropolis-ExtraLight';
    padding: 0 10px;
    font-size: 17px;
  }
  ${props => props.noprint && `
    @media print {
      display: none;
    }`}
`

export const Subheader = styled.h2`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  font-family: ${props => (props.font ? `Metropolis-${props.font}` : 'Metropolis-Regular')};
  font-size: ${props => props.size || '24px'};
  max-width: ${props => props.maxWidth || 'none'};
  color: ${props => props.color ? props.color : props.dark ? '#4A4A4A' : 'rgba(255, 255, 255, 0.75)'};
  letter-spacing: ${props => props.letterspacing ? props.letterspacing : props.characterSpace ? '2px' : '0.3px'};
  margin: ${props => props.margin ? props.margin : '0 auto 0 auto'};
  text-transform: ${props => props.allcaps ? 'uppercase' : 'none'};
  line-height: 1.6;
  span {
    text-transform: uppercase;
    font-size: 8px;
    margin: 0 10px;
  }
  text-align: ${props => props.center ? 'center' : 'left'};
`

export const MutedText = styled.p`
  font-family: 'Metropolis-SemiBold';
  font-size: 10px;
  color: #9B9B9B;
  text-align: left;
  margin: ${props => props.margin && props.margin};
`

export const HeaderUnderline = styled.div`
  width: 150px;
  height: 4px;
  background: #D8D8D8;
  margin-bottom: 30px;
`

export const HeaderLine = styled.div`
  width: 107%;
  height: 2px;
  margin-left: -20px;
  background: rgba(216,216,216,0.6);
`
