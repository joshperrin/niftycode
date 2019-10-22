import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Transition, animated } from 'react-spring/renderprops.cjs'

import BigIconButton from '../../components/buttons/bigIconBtn'
import featureData from './featureData'
import { Header, Subheader } from '../../components/headers'

const FeatureButtons = ({ currentSlide, showFeatureSlide, styles }) => (
  <FeatureContent style={styles}>
    <Header font="semibold" size="18px" inline> Features - </Header>
    <Subheader font="light" inline size="10px" left="5px" allcaps>
      click to learn more
    </Subheader>
    <FeatureButtonContainer>
      {featureData.map(feature => (
        <Transition
          native
          items={currentSlide !== feature.id}
          key={feature.id}
          from={{ opacity: 0, width: '0vw', transform: 'translate3d(0,150%,0)' }}
          enter={{ opacity: 1, width: '23vw', transform: 'translate3d(0,0,0)' }}
          leave={{ opacity: 0, width: '0vw', transform: 'translate3d(0,150%,0)' }}
        >
          {show => show && (props => (
            <FeatureButtonWrap
              key={feature.id}
              style={props}
              onClick={() => { showFeatureSlide(feature.id) }}
            >
              <BigIconButton content={feature} />
            </FeatureButtonWrap>
          ))}
        </Transition>
      ))}
    </FeatureButtonContainer>
  </FeatureContent>
)

FeatureButtons.propTypes = {
  showFeatureSlide: PropTypes.func.isRequired,
  currentSlide: PropTypes.number,
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}

FeatureButtons.defaultProps = {
  currentSlide: null,
}

export default FeatureButtons

const FeatureContent = styled(animated.section)`
  position: fixed;
  z-index: 30;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 0 auto;
  padding: 30px 0;
  text-align: left;
  h1 {
    padding-left: 1.1vw;
  }
`

const FeatureButtonContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
`

const FeatureButtonWrap = styled(animated.div)`
  grid-row: 1;
  opacity: 1;
  max-width: 220px;
  width: 23vw;
`
