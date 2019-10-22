import styled from 'styled-components'

export const SelectWrap = styled.button`
  display: inline-block;
  height: ${props => props.simple ? 'auto' : '120px'};
  padding: 5px;
  margin: ${props => props.simple ? '12px' : '20px 0 20px 0'};
  border-radius: 10px;
  box-shadow: 0 2px 20px 0 rgba(155,155,155,1);
  background-image: linear-gradient(0deg, #380036 0%, #50E3C2 98%);
  transition: all 1s;
  &:hover {
    box-shadow: 0 2px 35px 0 rgba(0,0,0,0.6);
  }
  &:first-child {
    margin-right: 40px
  }
  &:disabled {
    cursor: auto;
    box-shadow: none;
  }
`

export const SelectContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  padding: ${props => props.padding ? props.padding : '15px 60px 15px 15px'};
  text-align: left;
`

export const SelectTitle = styled.p`
  display: block;
  font-family: 'Metropolis-ExtraBold';
  font-size: 14px;
  margin: 0 0 20px 0;
  color: #4A4A4A;
`

export const SelectItem = styled.p`
  display: inline-block;
  font-family: 'Metropolis-ExtraBold';
  font-size: 15px;
  color: #4A4A4A;
  span {
    font-family: 'Metropolis-Light';
    margin: 0 3px;
  }
`
