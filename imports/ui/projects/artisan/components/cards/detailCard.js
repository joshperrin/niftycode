import styled from 'styled-components'

export const DetailCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 450px;
  height: 75px;
  border-radius: 15px;
  overflow: hidden;
  margin: 30px auto;
  text-align: left;
  background: rgba(255,255,255,0.90);
  box-shadow: 0 2px 10px 0 rgba(207,207,207,0.77);
  cursor: pointer;
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0 2px 12px 7px rgba(207, 207, 207, 0.5);
  }
`

export const DetailCardIcon = styled.div`
  width: 55px;
  height: 55px;
  margin: 0 30px;
  padding: 10px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
  background: #424242;
`

export const DetailCardTitle = styled.div`
  font-family: Arial-BoldMt;
  h1 {
    font-size: 15px;
    color: rgba(99,98,100,0.91);
    letter-spacing: 0.36px;
    margin: 3px 0;
  }
  p {
    font-size: 12px;
    margin: 3px 0;
    color: #948F96;
    letter-spacing: 0.27px;
  }
`

export const DetailCardCost = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: -5px;
  right: -25px;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  color: #4A4A4A;
  background-color: #D8D8D8;
  box-shadow: inset 0 0 4px 0 rgba(0,0,0,0.30);
  p {
    width: 100%;
    padding-right: 23px;
    margin: 0;
    font-size: 10px;
    font-family: 'aileron-regular';
    letter-spacing: 1px;
    text-align: center;
  }
  span {
    display: block;
    font-size: 14px;
    font-family: 'aileron-bold';
    letter-spacing: 0.2px;
  }
`
