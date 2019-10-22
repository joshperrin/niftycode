import styled from 'styled-components'


const RetangleButton = styled.button`
  display: inline-block;
  padding: ${props => props.padding ? props.padding : '5px 10px'};
  background: ${props => props.dark ? '#4a4a4a' : props.color ? props.color : 'rgba(80,167,81,0.25)'};
  color: ${props => props.dark && 'white'};
  margin: ${props => props.margin && props.margin};
  border-radius: 5px;
  font-family: aileron-bold;
  font-size: 14px;
  transition: background 1s, color 1s;
  &:hover {
    background: ${props => props.highlight ? props.highlight : props.dark ? '#4a4a4a' : 'rgba(80,167,81,1)'};
  }
  &:disabled {
    background: rgba(80,167,81,0.25);
  }
`

export default RetangleButton
