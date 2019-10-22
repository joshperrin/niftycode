import styled from 'styled-components'

const BlockButton = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.width ? props.width : '90px'};
  height: ${props => props.height ? props.height : '75px'};
  background: rgba(80,167,81,0.25);
  text-align: center;
  margin: ${props => props.margin ? props.margin : '10px'};
  border-radius: 10px;
  vertical-align: top;
  cursor: pointer;
  transition: all 1s;
  &:hover {
    background: #50A751;
    p, span { color: #FFF; }
    path { fill: #FFF; }
  }
  &.selected {
    background: #50A751;
    p, span {
      color: #FFF; 
    }
    path {
      fill: #FFF; 
    }
  }
  p {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #4A4A4A;
    font-size: ${props => props.bold ? '15px' : props.fontSize ? props.fontSize : '13px'};
    font-family: ${props => props.bold ? 'Aileron-Heavy' : 'Aileron-Regular'};
    margin: 10px auto 10px auto;
    transition: all 1s;
  }
  .type-icon {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-53%, -50%);
  }
  path {
    fill: #4A4A4A;
    transition: all 1s;
  }
  span {
    position: absolute;
    bottom: 7px;
    left: 0;
    right: 0;
    display: block;
    color: #4A4A4A;
    font-size: ${props => props.small ? '9px' : '11px'};
    font-family: 'Aileron-Regular';
    transition: all 1s;
  }
`

export default BlockButton
