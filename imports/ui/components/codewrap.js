import styled from 'styled-components'

const CodeWrap = styled.div`
  position: relative;
  margin-top: 50px;
  min-height: 100vh;
  background: white;
  text-align: ${props => props.align && props.align}
`

export default CodeWrap
