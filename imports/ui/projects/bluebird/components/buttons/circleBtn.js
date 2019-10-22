/* eslint no-nested-ternary: 0 */
import styled from 'styled-components'

const CircleButton = styled.button`
  position: fixed;
  top: 15px;
  right: 385px;
  z-index: 1000;
  background: #4A4A4A;
  border-radius: 50%;
  border: 2px solid #FFF;
  width: 45px;
  height: 45px;
  padding: 13px 12px 12px 13px;
  color: #FFF;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  svg {
    fill: #FFF;
  }
  &:hover {
    background: #808080;
    border-color: #CCCCCC;
  }
  &.open {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
`

export default CircleButton
