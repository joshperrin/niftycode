import styled from 'styled-components'

export const CircleMenuHeader = styled.p`
  font-family: Metropolis-ExtraBold;
  font-size: 11px;
  text-transform: uppercase;
  color: rgba(74,74,74,0.61);
  letter-spacing: 0;
  margin: 30px 0 15px 0;
  @media print {
    display: none;
  }
`

export const Circle = styled.div`
  display: inline-block;
  width: ${props => props.size && props.size};
  height: ${props => props.size && props.size};
  border-radius: 50%;
  vertical-align: middle;
  line-height: ${props => props.size && `${props.size.replace('px', '') - 4}px`};
  background: ${props => props.inactive ? 'rgba(74,74,74,0.7)' : 'rgba(56,0,54,0.75)'};
  border: ${props => props.border ? props.border : '2px'} solid #FFFFFF;
  font-family: ${props => (props.font ? `Metropolis-${props.font}` : 'Metropolis-Bold')};
  font-size: ${props => props.fontSize ? props.fontSize : '12px'};
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  transition: all 1s;
`

export const CircleButton = styled.button`
  display: block;
  padding: 0;
  p { 
    font-family: Metropolis-ExtraBold;
    font-size: 11px;
    color: #4A4A4A;
    transition: all 1s;
  }
  &:hover {
    ${Circle} {
      border-color: rgba(56,0,54,0.75);
      transform: scale(1.06);
    }
    p {
      color: black;
    }
  }
`

export const CircleMenu = styled.ul`
  min-height: 77px;
  margin-bottom: 30px;
  padding-top: 5px;
  overflow: auto;
  white-space: nowrap;
  @media print {
    display: none;
  }
  li { 
    display: inline-block;
    width: 85px;
  };
  ${CircleButton} {
    span {
      display: block;
      font-size: 8px;
      padding: 1px 0 0 0;
      opacity: 0.7;
    }
  }
  a {
    &.active {
      ${CircleButton} {
        cursor: default;
      }
      ${Circle} {
        background: #50E3C2;
      }
      &:hover {
        ${Circle} {
          border-color: #FFFFFF;
          transform: none;
        }
        p {
          color: #4A4A4A;
        }
      }
    }
  }
`
