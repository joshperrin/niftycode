import styled from 'styled-components'
import { animated } from 'react-spring'
import PillButton from '../buttons/pillBtn'

export const Card = styled(animated.div)`
  position: ${props => (props.position ? props.position : 'absolute')};
  top: ${props => (props.topspace ? props.topspace : '22vh')};
  left: 50%;
  padding: ${props => (props.padding ? props.padding : '5px 35px')};
  min-width: 430px;
  margin: ${props => props.margin && props.margin};
  width: ${props => props.width && props.width};
  transform: translate(-50%, 0);
  background: rgba(255, 255, 255, 0.75);
  border: 10px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 20px 4px rgba(0, 0, 0, 0.5);
  border-radius: 9px;
  text-align: center;
`

export const Card2 = styled(animated.div)`
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 4px 6px 20px 9px rgba(155, 155, 155, 0.36);
  border-radius: 25px;
  padding: 15px 20px;
  text-align: center;
`

export const Cards = styled.div`
  position: relative;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

export const CardItem = styled(animated.div)`
  ${props => props.position && `position: ${props.position}`}
  ${props => props.top && `top: ${props.top}`}
  ${props => props.bottom && `bottom: ${props.bottom}`}
  ${props => props.left && `left: ${props.left}`}
  ${props => props.right && `right: ${props.right}`}
  display: inline-block;
  width: 50%;
  height: 255px;
  vertical-align: top;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
`

export const ProfileCard = styled(Card2)`
  position: relative;
  width: 100%;
  height: 100%;
  ${PillButton} {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`

export const CardInfoWrap = styled.div`
  padding: 35px 0 25px 10px;
  text-align: left;
`

export const CardInfoItem = styled.div`
  display: inline-block;
  width: 50%;
  padding: ${props => props.padding ? props.padding : '0 0 20px 0'};
  margin-bottom: 10px;
`

export const CardInfo = styled.div`
  font-family: ${props => (props.font ? `Metropolis-${props.font}` : 'Metropolis-Regular')};
  font-size: ${props => props.size || '24px'};
  color: ${props => props.color ? props.color : '#4A4A4A'};
  margin: ${props => props.margin ? props.margin : '0 auto 0 auto'};
  padding: ${props => props.padding ? props.padding : '0 auto 0 auto'};
  text-align: left;
`
