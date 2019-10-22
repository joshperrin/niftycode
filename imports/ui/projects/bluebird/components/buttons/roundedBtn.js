import styled from 'styled-components'

const RoundedButton = styled.button`
  ${props => props.topRight && `
    position: absolute;
    z-index: 100;
    top: 45px
    right: 35px;
  `};
  display: inline-block;
  background: rgba(255, 255, 255, 0.75);
  border: 4px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 15px 4px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  padding: 7px 20px;
  font-family: Metropolis-Black;
  font-size: 12px;
  color: #000000;
  letter-spacing: 0.5px;
  transition: all 1s;
  &:hover {
    background: rgba(80, 80, 100, 0.85);
    color: rgba(255, 255, 255, 0.75);
    border-color: rgba(80, 80, 100, 0.85);
    transform: scale(1.05);
    box-shadow: 0 1px 25px 4px rgba(0, 0, 0, 1);
  }
`

export default RoundedButton
