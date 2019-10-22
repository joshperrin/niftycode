import styled from 'styled-components'

const SideMenu = styled.ul`
  position: absolute;
  z-index: 100;
  top: 17vh;
  left: 30px;
  button {
    position: relative;
    font-family: Helvetica-Bold;
    font-size: 16px;
    padding-bottom: 25px;
    color: rgba(255,255,255,0.65);
    letter-spacing: 1.34px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: #50E3C2;
      transform: scale(1.05);
    }
    &.active {
      color: #50E3C2;
      &:before {
        position: absolute;
        top: -5px;
        left: -30px;
        display: inline-block;
        content: '';
        width: 10px;
        height: 25px;
        background: #50E3C2;
      }
      &:hover {
        transform: none;
      }
    }
  }
`

export default SideMenu
