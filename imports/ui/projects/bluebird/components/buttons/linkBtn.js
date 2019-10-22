import styled from 'styled-components'

const LinkButton = styled.button`
  ${props => props.right && `
    float: right;
    margin-top: -19px;
  `}
  ${props => props.topLeft && `
    position: absolute;
    top: 22px;
    left: 5px;
  `}
  display: ${props => props.block ? 'block' : 'inline-block'};
  font-family: ${props => props.font ? `Metropolis-${props.font}` : 'Metropolis-Regular'};
  font-size: ${props => props.fontSize ? props.fontSize : '13px'};
  color: ${props => props.dark ? '#4A4A4A' : '#fff'};
  text-transform: ${props => props.uppercase && 'uppercase'};
  text-align: ${props => props.block ? 'center' : 'left'};
  margin: ${props => props.margin ? props.margin : props.block && '20px auto'};
  letter-spacing: 0.63px;
  transition: all 1s;
  svg {
    margin-right: 7px;
    fill: #4A4A4A;
  }
  span {
    ${props => props.topLeft && `
      position: relative;
      top: 1px;
    `}
    font-family: Metropolis-Bold;
    font-size: ${props => props.fontSize ? props.fontSize : '10px'};
  }
  &:hover {
    color: ${props => props.dark ? 'black' : '#50e3c2'};
    transform: ${props => props.dark ? 'none' : 'scale(1.05)'};
    svg {
      fill: black;
    }
  }
`

export default LinkButton
