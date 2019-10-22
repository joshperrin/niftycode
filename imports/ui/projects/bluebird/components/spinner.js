import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  100% { 
    transform: rotate(360deg); 
  }
`

const Spinner = styled.div`
  ${props => props.inline && `
    display: inline-block;
  `}
  position: ${props => props.inline ? 'static' : 'absolute'};
  top: 50%;
  left: 50%;
  margin: ${props => props.inline ? '0 15px 0 0' : '-30px 0 0 -30px'};
  width: ${props => props.inline ? '25px' : '60px'};
  height: ${props => props.inline ? '25px' : '60px'};
  border-radius: 100%;
  border: 
    ${props => props.inline ? '3px' : '10px'} solid
    ${props => props.dark ? 'rgba(74,74,74,0.2)' : 'rgba(255, 255, 255, 0.2)'};
  border-top-color: ${props => props.dark ? 'rgba(74,74,74,1)' : '#fff'};
  animation: ${spin} 1.2s infinite linear;
`

export default Spinner
