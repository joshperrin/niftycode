import styled from 'styled-components'

const MutedMenu = styled.ul`
  position: absolute;
  z-index: 100;
  bottom: 35px;
  left: 15px;
  li {
    font-family: Helvetica;
    font-size: 10px;
    padding-bottom: 10px;
    color: rgba(255,255,255,0.6);
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 1s;
    &:hover {
      color: #50E3C2;
      transform: scale(1.05);
    }
  }
`

export default MutedMenu
