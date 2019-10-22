import styled from 'styled-components'

export const SectionMenu = styled.ul`
  position: relative;
  border-top: 2px solid rgba(74,74,74,0.17);
  border-bottom: 2px solid rgba(74,74,74,0.17);
  margin-bottom: 10px;
  li { 
    display: inline-block 
  }
  a, button {
    display: inline-block;
    width: ${props => props.largerItems ? 'auto' : '90px'};
    font-family: Metropolis-SemiBold;
    font-size: 13px;
    color: rgba(74,74,74,0.60);
    letter-spacing: 1.02px;
    text-align: left;
    padding: ${props => props.largerItems ? '10px 50px 10px 0' : '10px 0 10px 10px'};
    cursor: pointer;
    transition: all 1s;
    &.active {
      color: #380036;
      font-family: Metropolis-Bold;
      &:hover {
        color: #380036;
        transform: none;
      }
    }
    &:hover {
      color: #4A4A4A;
      transform: scale(1.05);
    }
  }
  @media print {
    display: none;
  }
`

export const MenuLines = styled.div`
  position: absolute;
  z-index: -1;
  top: -2px;
  left: ${props => props.left ? props.left : 0};
  bottom: -2px;
  width: ${props => props.width ? props.width : '55px'};
  border-top: 2px solid #380036;
  border-bottom: 2px solid #380036;
  transition: all 0.5s;
`
