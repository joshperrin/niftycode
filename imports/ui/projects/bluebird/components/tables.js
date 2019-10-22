import styled from 'styled-components'

export const ClearTable = styled.table`
  width: 100%;
  border: none;
  padding: 0 10px;
  td {
    padding: 12px 0;
    font-size: 10px;
    font-family: Metropolis-Regular;
    text-align: left;
    &:last-child {
      text-align: right;
    }
  }
  p {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    font-family: Metropolis-ExtraBold;
    color: #4A4A4A;
    letter-spacing: 0.9px;
    font-size: 10px;
    border-radius: 50%;
    border: 3px solid rgba(74,74,74,0.75);
    margin-right: 8px;
  }
`

export const SeperatedTable = styled.table`
  width: 100%;
  max-width: ${props => props.maxwidth ? props.maxwidth : '600px'};
  margin: 40px auto;
  border-collapse: collapse;
  tbody {
    tr { border-top: 3px solid rgba(56,0,54,0.10); }
  }
  .clickable {
    cursor: pointer;
    transition: background 1s;
    &:hover {
      background: rgba(204,211,216,0.45);
    }
  }
`

export const TableData = styled.td`
  font-family: ${props => props.bold ? 'Metropolis-ExtraBold' : 'Metropolis-Bold'};
  padding: ${props => props.padding ? props.padding : '10px'};
  ${props => props.align && `text-align: ${props.align}`}
  color: rgba(74,74,74,0.90);
  font-size: ${props => props.bold ? '13px' : '12px'};
  min-width: 80px;
  line-height: 1.5;
  vertical-align: ${props => props.vAlign ? props.vAlign : 'top'};
  white-space: ${props => props.wordwrap ? 'normal' : 'nowrap'};
`

export const TableHeader = styled.thead`
  opacity: 0.6;
  font-family: Metropolis-Black;
  font-size: 11px;
  color: #4A4A4A;
  text-transform: uppercase;
  ${props => props.alignLeft && 'text-align: left;'}
`

export const TableHeaderItem = styled.th`
  padding: 10px 0;
  ${props => props.center && 'text-align: center;'};
`

export const TableLabelPre = styled.div`
  opacity: 0.6;
  font-family: Metropolis-Black;
  font-size: 9px;
  color: #4A4A4A;
  margin-bottom: 3px;
  text-align: left;
`

export const TableLabel = styled.div`
  font-family: Metropolis-ExtraBold;
  font-size: 14px;
  color: #4A4A4A;
  text-align: left;
`

export const TableValue = styled.div`
  display: inline-block;
  font-family: Metropolis-${props => props.font ? props.font : 'ExtraBold'};
  font-size: 13px;
  color: ${props => props.color ? props.color : '#4A4A4A'};
  text-align: left;
  padding-top: 3px;
`

export const TableDateSeperator = styled.span`
  opacity: 0.6;
  font-family: Metropolis-Black;
  font-size: 9px;
  margin: 10px;
  color: #4A4A4A;
`

export const TableInput = styled.input`
  width: 100%;
  color: #4a4a4a;
  padding: 7px 5px;
  text-align: right;
  border: none;
  border-radius: 5px;
  background: rgba(255,255,255, 0.5);
`

export const HighlightRow = styled.tr`
  background: rgba(56,0,54,0.10);
`
