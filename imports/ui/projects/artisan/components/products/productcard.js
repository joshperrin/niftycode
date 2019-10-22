import styled, { keyframes } from 'styled-components'
import { Circle } from '../buttons/circleButton'

export const ProductContainer = styled.div`
  padding: 25px;
  max-width: 1070px;
  margin: 0 auto;
  text-align: left;
  transition: all 0.4s;
  @media (max-width: 1070px) {
    max-width: 730px;
  }
  @media (max-width: 730px) {
    max-width: 390px;
  }
`

export const ProductImageWrap = styled.div`
  width: 100%;
  height: 190px;
  background: #979797;
  overflow: hidden;
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ProductImage = styled.div`
  height: 100%;
  background: url(${props => props.imageUrl}) no-repeat center center;
  background-size: cover;
  animation: 1s ${fadeIn} ease-out;
  transition: all 1s;
`

export const ProductCard = styled.div`
  position: relative;
  display: inline-block;
  width: 300px;
  margin: 20px;
  padding: 10px;
  border-radius: 15px;
  vertical-align: top;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 5px 0 rgba(207, 207, 207, 0.77);
  transition: all 1s;
  border: 5px solid ${props => props.editing ? props.selected ? '#134420' : 'rgba(155, 155, 155, 0.5)' : 'white'};
  ${Circle} {
    background-color: ${props => props.selected && '#134420'};
  }
  &:hover {
    box-shadow: 0 2px 10px 7px rgba(207, 207, 207, 0.5);
    border-color: ${props => props.editing && (props.selected ? '#134420' : '#50A751')};
    ${props => props.editing
    ? `${Circle} {
        background-color: ${props.selected ? '#134420' : '#50A751'};
    }`
    : `${ProductImage} {
        transform: scale(1.15);
    }`}
  }
`

export const ProductPrice = styled.p`
  position: absolute;
  z-index: 1000;
  top: ${props => props.top ? props.top : '22px'};
  left: ${props => props.left ? props.left : '22px'};
  width: ${props => props.size ? props.size : '45px'};
  height: ${props => props.size ? props.size : '45px'};
  border-radius: 50%;
  background-color: rgba(74, 74, 74, 0.9);
  font-family: LucidaGrande-Bold;
  text-align: center;
  font-size: 13px;
  color: #fff;
  letter-spacing: -0.78px;
  margin: 0;
  line-height: ${props => props.size ? `${props.size.split('p')[0] - 5}px` : '40px'};
  border: 2px solid #fff;
`

export const ProductTitle = styled.div`
  height: 17px;
  font-family: Arial-BoldMT;
  font-size: 15px;
  color: rgba(99, 98, 100, 0.91);
  letter-spacing: 0.48px;
  margin: 12px 0 20px 0;
  text-align: center;
`

export const ProductDetails = styled.div`
  font-family: Arial-BoldMT;
  text-align: center;
`

export const ProductDetail = styled.div`
  display: inline-block;
  color: #4a4a4a;
  font-size: 16px;
  padding: 0 10px;
  p {
    font-family: Arial-BoldMT;
    font-size: 10px;
    letter-spacing: 0.3px;
    margin: 0;
  }
  &:first-child {
    float: left;
    color: #f56151;
  }
  &:last-child {
    float: right;
    color: #50a751;
  }
`
