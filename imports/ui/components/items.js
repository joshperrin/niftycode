import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Item = styled.div`
  position: relative;
  display: inline-block;
  width: 230px;
  margin: 20px 10px;
`

export const ItemBtns = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 500;
  padding: 10px 0;
  background: rgba(0,0,0,0.7);
  transition: all 0.3s ease-in-out;
  transform: translateY(50px);
`

export const ItemImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 5px;
  vertical-align: top;
  cursor: pointer;
  overflow: hidden;
  border: 7px solid white;
  padding: 0;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 5px 0 rgba(207, 207, 207, 0.77);
  transition: all 1s;
  &:hover {
    box-shadow: 0 2px 10px 7px rgba(207, 207, 207, 0.5);
    ${ItemBtns} {
      transform: translateY(0);
    }
    &:after {
      transform: scale(1.1);
    }
  }
  &:after {
    display: block;
    content: '';
    height: 100%;
    background: url(${props => props.image}) no-repeat top center;
    background-size: cover;
    animation: 1s ${fadeIn} ease-out;
    transition: all 1s;
  }
`

export const ItemTitle = styled.p`
  font-family: Arial;
  font-size: 18px;
  font-weight: 800;
  color: #4A4A4A;
  padding-left: 7px;
  text-align: center;
`

export const ItemBtn = styled.button`
  display: inline-block;
  font-family: Arial;
  font-weight: 800;
  width: 70px;
  padding: 7px 12px;
  margin: 0 10px;
  border-radius: 50px;
  border: 2px solid #4a4a4a;
  background: rgba(248,248,248,0.9);
  cursor: pointer;
  /* transition: background 1s; */
  &:hover {
    color: #f2f2f2;
    background: #4a4a4a;
    border: 2px solid #f2f2f2;
  }
`
