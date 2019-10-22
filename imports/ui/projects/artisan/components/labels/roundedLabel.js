import styled from 'styled-components'

const RoundedLabel = styled.span`
  position: absolute;
  top: -27px;
  left: 50%;
  font-family: 'aileron-regular';
  padding: 10px 15px;
  color: white;
  border-radius: 17px;
  background: #50A751;
  transform: translate(-50%, 0);
`

export const Label = styled.p`
  display: inline-block;
  font-size: 13px;
  font-family: 'aileron-bold';
  padding: 4px 17px;
  margin: 0 0 0 35px;
  text-align: center;
  color: #134420;
  background: rgba(80,167,81,0.35);
  border: 2px solid #134420;
  border-radius: 7px;
`

export default RoundedLabel
