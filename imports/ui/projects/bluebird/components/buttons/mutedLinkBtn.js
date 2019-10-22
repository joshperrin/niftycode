import styled from 'styled-components'

const MutedLinkButton = styled.button`
  position: absolute;
  top: 132px;
  right: 35px;
  display: inline-block;
  font-family: Metropolis-Bold;
  font-size: 10px;
  color: rgba(74,74,74,0.61);
  letter-spacing: 0.5px;
  transition: all 1s;
  &:hover {
    color: #4a4a4a;
    transform: scale(1.04);
  }
`

export default MutedLinkButton
