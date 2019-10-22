/* eslint no-nested-ternary: 0 */
import styled from 'styled-components'

const PillButton = styled.button`
  ${props => props.sticky
    && `
    position: fixed;
    top: 65vh;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
  ${props => props.position && `position: ${props.position}`}
  ${props => props.top && `top: ${props.top}`}
  ${props => props.right && `right: ${props.right}`}
  display: ${props => props.block ? 'block' : 'inline-block'};
  background: ${props => props.redButton ? '#B8020D' : '#50E3C2'};
  border-radius: 25px;
  border: ${props => props.bordered ? '3px solid white' : 'none'};
  margin: ${props => props.margin ? props.margin : '0 auto 0 auto'};
  width: ${props => props.width ? props.width : 'auto'};
  padding: ${props => props.small ? '7px' : props.med ? '10px 17px' : '15px 20px'};
  font-family: Metropolis-Regular;
  font-size: ${props => props.small ? '9px' : props.med ? '11px' : '15px'};
  color: ${props => props.bordered ? 'white' : 'black'};
  box-shadow: ${props => !props.flat && '0 2px 7px 0 rgba(0, 0, 0, 0.2)'};
  letter-spacing: 0.71px;
  transition: all 1s;
  ${props => props.hover === 'callout'
    && `
    &:hover {
      background: rgba(80, 80, 100, 0.85);
      color: rgba(255, 255, 255, 0.75);
      border-color: rgba(80, 80, 100, 0.85);
      transform: scale(1.05);
      rgba(0, 0, 0, 1)};
  `}
`

export default PillButton
