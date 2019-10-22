import styled from 'styled-components'

const TriangleDown = styled.div`
  width: 0; 
  height: 0; 
  border-left: ${props => props.width ? props.height : '20px'} solid transparent;
  border-right: ${props => props.width ? props.height : '20px'} solid transparent;
  border-top: ${props => props.height ? props.height : '20px'} solid #fff;
`

export default TriangleDown
