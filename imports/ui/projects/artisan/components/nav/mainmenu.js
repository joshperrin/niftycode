import styled from 'styled-components'

const MainMenu = styled.ul`
  display: inline-block;
  position: relative;
  height: 20px;
  list-style: none;
  margin-top: 132px;
  padding: 0;
  li {
    display: inline-block;
    width: 135px;
    height: 20px;
    text-align: center;
    vertical-align: top;
    @media (max-width: 410px) {
      width: 110px;
    }
  }
  button {
    display: inline-block;
    height: 20px;
    font-family: Aileron-Bold;
    color: rgba(255,255,255, 0.7);
    vertical-align: bottom;
    letter-spacing: 3px;
    font-size: 13px;
    transform: translateY(2px);
    transition: all 0.4s;
    &.active {
      color: #134420;
      transform: scale(1.4) translateY(0);
      cursor: default;
      @media (max-width: 410px) {
        transform: scale(1.25);
      }
    }
    &:hover {
      color: #134420;
    }
  }
`

export default MainMenu
