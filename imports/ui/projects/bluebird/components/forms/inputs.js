/* eslint no-nested-ternary: 0 */
import styled from 'styled-components'
import { animated } from 'react-spring/renderprops.cjs'
import { Field, FastField } from 'formik'


export const ErrorMessage = styled(animated.span)`
  position: absolute;
  top: 0;
  left: 0;
  font-family: Metropolis-Bold;
  color: #EB3540;
`

export const InputLabel = styled(animated.span)`
  position: absolute;
  top: 0;
  left: 0;
  color: #4A4A4A;
  font-family: Metropolis-Bold;
`

export const InputWrapper = styled.div`
  display: block;
  width: 100%;
  height: 44px;
  font-size: 14px;
  box-shadow: 0 2px 2px 0 rgba(74,74,74,0.44);
  border-radius: 5px;
  background: rgba(255,255,255,0.65);
  padding: 15px;
  margin: 5px auto 30px auto;
  transition: box-shadow 0.5s;
  &:focus {
    box-shadow: 0 2px 15px 0 rgba(74,74,74,0.44);
  }
`

export const InputIconWrap = styled.div`
  position: relative;
  ${props => props.margin && `margin: ${props.margin}`}
  ${props => props.padding && `padding: ${props.padding}`}
  svg {
    position: absolute;
    top: 11px;
    left: ${props => props.iconLeft ? props.iconLeft : '20px'};
    fill: #9B9B9B;
  }
`

export const StyledInput = styled.input`
  display: block;
  width: ${props => props.width ? props.width : '250px'};
  height: 44px;
  font-size: 12px;
  font-family: Metropolis-Bold;
  box-shadow: 0 2px 2px 0 rgba(74,74,74,0.44);
  border: none;
  border-radius: 5px;
  background: rgba(255,255,255,0.65);
  padding: 15px 15px 15px 55px;
  margin: ${props => props.margin ? props.margin : '5px auto'};
  transition: box-shadow 0.5s;
  &:disabled {
    background: rgba(0,0,0,0.05);
  }
  &:focus {
    box-shadow: 0 2px 15px 0 rgba(74,74,74,0.44);
  }
`

export const StyledField = styled(FastField)`
  display: block;
  width: 100%;
  height: ${props => props.size === 'small' ? '35px' : '44px'};
  font-size: ${props => props.size === 'small' ? '12px' : '14px'};
  font-family: Metropolis-Regular;
  border: ${props => props.error ? '3px solid #EB3540' : props.disabled ? '2px solid rgba(155,155,155,.6)' : 'none'};
  box-shadow: ${props => props.disabled ? 'none' : '0 2px 2px 0 rgba(74,74,74,0.44)'};
  border-radius: 5px;
  background: ${props => props.disabled ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.65)'};
  padding: 0 12px;
  margin: ${props => props.size === 'small' ? '5px auto 20px auto' : '5px auto 30px auto'};
  transition: box-shadow 0.5s;
  &:focus {
    box-shadow: 0 2px 15px 0 ${props => props.error ? ' #EB3540' : 'rgba(74,74,74,0.44)'};
  }
  &::placeholder {
    color: #9B9B9B;
  }
`

export const StyledLabel = styled.label`
  position: relative;
  display: ${props => props.display ? props.display : props.inline ? 'inline-block' : 'block'};
  width: ${props => props.width ? props.width : props.inline ? '33.3333%' : 'auto'};
  padding: ${props => props.padding ? props.padding : '15px 0 0 0'};
  margin: ${props => props.margin && props.margin};
  font-family: Metropolis-Regular;
  font-size: 12px;
  text-align: left;
  vertical-align: top;
  border: ${props => props.inline && '10px solid transparent'};
  ${StyledField} {
    ${props => props.inline
    ? props.disabled ? 'background: rgba(255,255,255,0.38);'
      : props.light ? 'background: rgba(255,255,255,0.65);'
        : 'background: rgba(204, 211, 216, 0.45);'
    : ''}
    
    ${props => props.inline && 'margin-bottom: 0px;'}
  }
  ${InputLabel} {
    ${props => props.inline
    ? props.disabled ? 'color:#787778'
      : props.light ? 'color: #4A4A4A'
        : 'color: #9B9B9B' : ''};
  }
  &.last {
    padding-right: 0;
  }
`

export const StyledCheckbox = styled(Field)`
  display: inline-block;
  margin: ${props => props.margin ? props.margin : props.display === 'inline' ? '0 2px 0 12px' : '0 5px 30px 0'};
  font-size: ${props => props.size ? props.size : '11px'};
`

export const CheckboxLabel = styled.p`
  display: inline-block;
  font-family: Metropolis-Bold;
  font-size: ${props => props.size ? props.size : '11px'};
  color: black;
`
