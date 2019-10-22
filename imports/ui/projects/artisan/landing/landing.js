import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition, animated, Keyframes } from 'react-spring/renderprops.cjs'
import delay from 'delay'

import BackButton from '../components/buttons/backButton'
import featureData from './features/featureData'
import FeatureButtons from './features/featureButtons'
import Icon from '../../../icons/icon'
import { Header, Subheader } from '../components/headers'
import { PillButton } from '../components/buttons/buttons'
import { Slide, SlideContent, SlideImage, SlideText } from '../components/slide'
import {
  slideRightInFade, slideLeftOutFade, slideUpInFadeCentered,
  slideDownOutFadeCentered, fadein, fadeOut,
} from '../animations/animations'

// Animations
const LandingMenu = Keyframes.Spring({
  enter: slideRightInFade,
  exit: slideLeftOutFade,
  showSlides: slideLeftOutFade,
})

const Features = Keyframes.Spring({
  enter: slideUpInFadeCentered,
  exit: slideDownOutFadeCentered,
})

const LandingCopy = Keyframes.Spring({
  enter: fadein,
  exit: fadeOut,
  showSlides: fadeOut,
})

const CloseSlidesBtn = Keyframes.Spring({
  enter: fadeOut,
  showSlides: fadein,
})

class Landing extends PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  state = {
    slideIndex: null,
    animation: 'enter',
  }

  back = () => {
    const { history } = this.props
    history.push('/')
    this.setState({
      slideIndex: null,
      animation: 'enter',
    })
  }

  goToRoute = async (route) => {
    const { history } = this.props
    await this.setState({ animation: 'exit' })
    await delay(200)
    history.push(`/${route}`)
  }


  render() {
    const { animation, slideIndex } = this.state
    return (
      <Fragment>
        <LandingMenu native state={animation}>
          {styles => (
            <SimpleMenu style={styles}>
              <li>
                <button onClick={() => {}} type="button">
                  Sign in
                </button>
              </li>
              <li>
                <button onClick={() => {}} type="button">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => {}} type="button">
                  How it works
                </button>
              </li>
            </SimpleMenu>
          )}
        </LandingMenu>

        <CloseSlidesBtn native state={animation}>
          {styles => <BackButton action={this.back} style={styles} />}
        </CloseSlidesBtn>

        {/* Copy */}
        <LandingCopy native state={animation}>
          {styles => (
            <MainCopy style={styles}>
              <Header size="30px" font="heavy">
                Make what you love, make you money
              </Header>
              <Subheader size="18px" font="ultralight" characterSpace withSpace>
                Artisan accounts software helps artists, makers, and creators
                like you to know your profits, products and costs
              </Subheader>
              <PillButton onClick={() => {}}>
                Try it free
              </PillButton>
            </MainCopy>
          )}
        </LandingCopy>

        {/* Feature Slides */}
        <Transition
          native
          items={featureData[slideIndex] || []}
          keys={item => item.id}
          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(-50%,0,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(-150%,0,0)' }}
        >
          {item => props => (
            <Slide style={props}>
              <SlideContent>
                <Icon icon={item.icon} height="70px" width={item.iconWidth} color="#4A4A4A" />
                <Header size="24px" font="regular" dark>{item.title}</Header>
                <SlideText>{item.text}</SlideText>
              </SlideContent>
              <SlideImage src={`/images/${item.feature}.png`} alt={item.image} padding={item.feature === 'cost'} />
            </Slide>
          )}
        </Transition>

        {/* Feature Buttons */}
        <Features native state={animation}>
          {styles => (
            <FeatureButtons
              currentSlide={slideIndex}
              showFeatureSlide={() => {}}
              styles={styles}
            />
          )}
        </Features>
      </Fragment>
    )
  }
}

export default Landing

const MainCopy = styled(animated.div)`
  position: absolute;
  top: 250px;
  z-index: 30;
  display: block;
  width: 585px;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
`

const SimpleMenu = styled(animated.ul)`
  position: fixed;
  z-index: 5000;
  top: 70px;
  left: 20px;
  list-style: none;
  text-align: left;
  padding: 0 0 0 5px;
  margin: 0;
  button {
    font-family: aileron-semibold;
    font-size: 16px;
    border: none;
    color: white;
    margin-bottom: 15px;
    cursor: pointer;
  }
`
