import styled from 'styled-components'


export const ExpenseCircle = styled.button`
  display: inline-block;
  width: 165px;
  height: 165px;
  border-radius: 50%;
  margin: 20px;
  background: rgba(255,255,255,0.90);
  box-shadow: 0 2px 10px 0 rgba(207,207,207,0.77);
  vertical-align: top;
  transition: box-shadow 1s;
  border: 5px solid ${props => props.editing ? props.selected ? '#134420' : 'rgba(155, 155, 155, 0.5)' : 'white'};
  transform: ${props => props.small && 'scale(0.75)'};
  &:hover {
    box-shadow: 0 2px 12px 7px rgba(207, 207, 207, 0.5);
    border-color: ${props => props.editing && (props.selected ? '#134420' : '#50A751')};
  }
  &:disabled {
    &:hover {
      box-shadow: 0 2px 10px 0 rgba(207,207,207,0.77);
    }
  }
`

export const ExpenseName = styled.p`
  font-size: 18px;
  color: rgba(99,98,100,0.91);
  margin: 10px 0 12px 0;
`

export const ExpenseValue = styled.p`
  font-size: 20px;
  color: #4A4A4A;
  margin: 0;
`

export const ExpenseFrequency = styled.span`
  font-size: 10px;
  color: #4A4A4A;
`
