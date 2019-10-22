import styled from 'styled-components'


export const CallOut = styled.li`
  margin-left: 35px;
  text-align: right;
  border-left: 2px solid white;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  background: #50E3C2;
`

export const IconCircle = styled.div`
  position: absolute;
  top: -7px;
  left: -7px;
  padding: 1px;
  background-color: white;
  border-radius: 50%;
`

const IconMenu = styled.ul`
  position: absolute;
  z-index: 100;
  top: 20px;
  right: 0;
  ${CallOut} {
    padding: 0;
    button {
      position: relative;
      padding: 0;
      width: 100%;
      height: 100%;
      text-align: right;
      padding: 6px 10px 6px 20px;
      svg {
        fill: #4A4A4A;
      }
    }
    span {
      display: block;
      margin: 0 0 5px 0;
      font-family: Metropolis-Regular;
      font-size: 10px;
      color: #4A4A4A;
    }
    p {
      margin: 0;
      color: #4A4A4A;
      font-size: 11px;
      font-family: Metropolis-Bold;
    }
  }
  li {
    display: inline-block;
    padding: 0 15px;
    vertical-align: top;
    transition: all 1s;
    button {
      display: block;
      text-align: center;
      letter-spacing: 0.89px;
      color: rgba(255, 255, 255, 0.6);
    }
    p {
      font-family: Helvetica-Bold;
      font-size: 9px;
      letter-spacing: 0.89px;
    }
    svg {
      fill: rgba(255, 255, 255, 0.6);
    }
    path,
    circle {
      transition: fill 0.5s;
    }
    &:hover, .active {
      color: #50e3c2;
      path {
        fill: #50e3c2 !important;
      }
      circle {
        fill: #9b9b9b !important;
      }
    }
  }
`

export default IconMenu
