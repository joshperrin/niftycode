import styled from 'styled-components'

const Circle = styled.div`
  display: inline-block;
  width: ${props => props.width ? props.width : '45px'};
  height: ${props => props.width ? props.width : '45px'};
  border-radius: 50%;
  color: white;
  font-size: 15px;
  font-family: 'Metropolis-Black';
  margin-right: 15px;
  padding-top: 15px;
  text-align: center;
  background: rgba(56,0,54,0.75);
  ${props => props.bordered && `
    border: 2px solid #FFF;
  `}
`

export default Circle
