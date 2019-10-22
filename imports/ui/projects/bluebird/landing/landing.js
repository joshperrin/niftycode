import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import delay from 'delay'
import { animated } from 'react-spring/renderprops.cjs'

import { ModalTransitions } from '../animations/animations'
import { Header, Subheader, HeaderUnderline } from '../components/headers'
import RoundedButton from '../components/buttons/roundedBtn'
import LinkButton from '../components/buttons/linkBtn'
import PillButton from '../components/buttons/pillBtn'


class Landing extends PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  state = { animation: 'enter' }

  animateToRoute = async (route) => {
    const { history } = this.props
    await this.setState({ animation: 'exit' })
    await delay(400)
    history.push(`/${route}`)
  };

  render() {
    const { animation } = this.state
    return (
      <Fragment>
        <RoundedButton topRight onClick={() => {}}>
          Signin
        </RoundedButton>
        <ModalTransitions native state={animation}>
          {styles => (
            <Fragment>
              <SimpleMenu style={styles}>
                <li>
                  <LinkButton onClick={() => {}}>
                    How it works
                  </LinkButton>
                </li>
                <li>
                  <LinkButton onClick={() => {}}>
                    Pricing
                  </LinkButton>
                </li>
              </SimpleMenu>
              <MainCopy style={styles}>
                <Header size="50px" font="ExtraBold">
                  Simple Payroll
                </Header>
                <HeaderUnderline />
                <Subheader size="13px" font="Light" margin="0 0 50px 0">
                  Your small business doesn’t require a big complicated
                  payroll solution. Bluebird is clear and simple payroll, so
                  you can pay your employees, pay the CRA, and get back to
                  work.
                </Subheader>
                <PillButton hover="callout" onClick={() => {}}>
                  Request an invite
                </PillButton>
              </MainCopy>
            </Fragment>
          )}
        </ModalTransitions>
      </Fragment>
    )
  }
}

export default Landing

const MainCopy = styled(animated.div)`
  position: absolute;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);
  text-align: left;
  padding-left: 50px;
  width: 585px;
`

const SimpleMenu = styled(animated.ul)`
  position: fixed;
  z-index: 100;
  top: 102px;
  right: 135px;
  list-style: none;
  padding: 0 0 0 5px;
  margin: 0;
  li {
    display: inline-block;
    width: 110px;
    text-align: center;
  }
`
