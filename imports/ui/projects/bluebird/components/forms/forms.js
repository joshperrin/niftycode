/* eslint no-nested-ternary: 0 */
import styled from 'styled-components'
import { Form } from 'formik'

export const FormSection = styled.div`
  padding: 15px 5px;
  .flatpickr-input {
    background: rgba(204,211,216,0.45);
  }
`

export const StyledForm = styled(Form)`
  ${props => props.maxwidth && `max-width: ${props.maxwidth}`}
  margin: ${props => props.maxwidth ? '40px auto 20px auto' : props.margin ? props.margin : '20px 45px'};
`

export const CenteredForm = styled(Form)`
  text-align: center;
`

export const FlatForm = styled.form`
  margin: 30px;
  text-align: left;
`

export const FlatInput = styled.label`
  display: inline-block;
  width: ${props => props.width ? props.width : '50%'};
  text-align: left;
  padding: 0 15px;
  font-family: Metropolis-Bold;
  font-size: 12px;
  color: #9B9B9B;
  margin-bottom: 20px;
  input {
    display: block;
    width: 100%;
    border: 2px solid rgba(155,155,155,.53);
    border-radius: 5px;
    font-size: 15px;
    color: #4A4A4A;
    padding: 10px;
    margin-top: 7px;
  }
`
