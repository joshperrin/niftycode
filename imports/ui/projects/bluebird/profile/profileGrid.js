import React, { Fragment, useRef } from 'react'
import PropTypes from 'prop-types'
import { useChain, useTransition } from 'react-spring'

import ProfileInfo from './profileInfo/profileInfo'
import ProfileAccountantContainer from './profileAccountant/profileAccountant'
import ProfilePlanContainer from './profilePlan/profilePlan'
import ProfileBillingContainer from './profileBilling/profileBilling'

const profileGrid = ({ profileState, toggleEditInfo, toggleChoosePlan, pageTransitionRef }) => {
  const transitionOutTopLeftRef = useRef()
  const transitionOutTopLeft = useTransition(profileState === 'grid', null, {
    ref: transitionOutTopLeftRef,
    from: { transform: 'translate3d(-200%,-100%,0)' },
    enter: { transform: 'translate3d(0,0,0)' },
    leave: { transform: 'translate3d(-200%,-100%,0)' },
  })
  const transitionOutBottomLeftRef = useRef()
  const transitionOutBottomLeft = useTransition(profileState === 'grid', null, {
    ref: transitionOutBottomLeftRef,
    from: { transform: 'translate3d(-200%,100%,0)' },
    enter: { transform: 'translate3d(0,0,0)' },
    leave: { transform: 'translate3d(-200%,100%,0)' },
  })
  const transitionOutTopRightRef = useRef()
  const transitionOutTopRight = useTransition(profileState === 'grid', null, {
    ref: transitionOutTopRightRef,
    from: { transform: 'translate3d(200%,-100%,0)' },
    enter: { transform: 'translate3d(0,0,0)' },
    leave: { transform: 'translate3d(200%,-100%,0)' },
  })
  const transitionOutBottomRightRef = useRef()
  const transitionOutBottomRight = useTransition(profileState === 'grid', null, {
    ref: transitionOutBottomRightRef,
    from: { transform: 'translate3d(200%,100%,0)' },
    enter: { transform: 'translate3d(0,0,0)' },
    leave: { transform: 'translate3d(200%,100%,0)' },
  })
  useChain([
    pageTransitionRef, transitionOutBottomLeftRef, transitionOutBottomRightRef,
    transitionOutTopRightRef, transitionOutTopLeftRef], [0, 0.5, 0.5, 0.5, 0.5])
  return (
    <Fragment>
      {transitionOutTopLeft.map(({ item, key, props }) => (
        item && <ProfileInfo key={key} style={props} toggleEditInfo={toggleEditInfo} />
      ))}
      {transitionOutTopRight.map(({ item, key, props }) => (
        item && <ProfileAccountantContainer key={key} style={props} />
      ))}
      {transitionOutBottomLeft.map(({ item, key, props }) => (
        item && <ProfilePlanContainer key={key} style={props} toggleChoosePlan={toggleChoosePlan} />
      ))}
      {transitionOutBottomRight.map(({ item, key, props }) => (
        item && <ProfileBillingContainer key={key} style={props} />
      ))}
    </Fragment>
  )
}

export default profileGrid

profileGrid.propTypes = {
  profileState: PropTypes.string.isRequired,
  pageTransitionRef: PropTypes.object.isRequired,
  toggleEditInfo: PropTypes.func.isRequired,
  toggleChoosePlan: PropTypes.func.isRequired,
}
