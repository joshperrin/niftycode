import styled from 'styled-components'

const label = styled.div`
  ${props => props.topRight && `
    position: absolute;
    top: 8px;
    right: 35px;
  `}
  svg {
      fill: #4A4A4A;
    }
  p {
    display: inline-block;
    padding: 1px 0 0 8px;
    font-family: Metropolis-Bold;
    color: #4A4A4A;
    font-size: 11px;
  }
`

export default label
