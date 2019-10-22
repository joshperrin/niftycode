import styled from 'styled-components'
import { Field, Form } from 'formik'
import { animated } from 'react-spring/renderprops.cjs'

export const StyledField = styled(Field)`
  display: block;
  width: 100%;
  font-size: 16px;
  border: 3px solid ${props => props.error ? ' #EB3540' : '#50A751'};
  border-radius: 5px;
  padding: 12px;
  margin: 5px auto 25px auto;
  transition: box-shadow 0.5s;
  &:focus {
    box-shadow: 0 2px 15px 0 ${props => props.error ? ' #EB3540' : '#50A751'};
  }
  &::placeholder {
    color: #9B9B9B;
  }
`

export const StyledForm = styled(Form)`
  position: relative;
  margin: ${props => props.space ? props.space : '10px auto 20px auto'}
  ${props => props.maxwidth && `max-width: ${props.maxwidth}`}
`

export const ErrorMessage = styled(animated.span)`
  position: absolute;
  bottom: 53px;
  left: 0;
  font-family: aileron-bold;
  color: #EB3540;
`

export const InputLabel = styled(animated.span)`
  position: absolute;
  top: 0;
  left: 0;
  color: #4A4A4A;
  font-family: aileron-bold;
`

export const StyledLabel = styled.label`
  position: relative;
  display: ${props => props.two ? 'inline-block' : 'block'};
  width: ${props => props.two ? '50%' : 'auto'};
  padding-top: ${props => props.slim ? '18px' : '20px'};
  ${props => props.slim && 'font-size: 14px;'}
  padding-left: ${props => props.two ? '10px' : 0};
  margin: ${props => props.margin && props.margin};
  ${InputLabel} {
      ${props => props.two && `
        right: 0;
        text-align: right;
      `}
    }
  &:first-child {
    padding-left: 0;
    ${props => props.two && 'padding-right: 10px'};
    ${InputLabel} {
      left: 0;
      text-align: left;
    }
  }
  .input-icon {
    position: absolute;
    bottom: 12px;
    right: 10px;
  }
`
