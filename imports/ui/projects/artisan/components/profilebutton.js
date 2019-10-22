import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const ProfileButton = styled.button`
  position: absolute;
  top: 20px;
  right: 45px;
  transition: all 0.7s;
  p {
    display: block;
    color: #FFF;
    font-size: 12px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    transform: translateX(10px);
  }
  img {
    animation: 1s ${fadeIn} ease-out;
    transition: all 0.5s;
  }
  &:hover {
    img {
      box-shadow: 0 2px 7px 0 rgba(0,0,0,0.50);
      transform: scale(1.04)
    }
    p {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
  }
  &.feature {
    top: 40px;
    right: 50%;
    transform: translateX(50%) scale(1.6);
    &:hover {
      cursor: auto;
      img {
        box-shadow: none;
        transform: none;
      }
      p {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`

export default ProfileButton
