import { Keyframes } from 'react-spring/renderprops.cjs'

/* --- Fade Animation --- */
export const ModalTransitions = Keyframes.Spring({
  enter: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  exit: {
    to: { opacity: 0 },
  },
})

/* --- Page Animation --- */
export const PageAnimation = Keyframes.Spring({
  enterUp: {
    from: { transform: 'translate3d(7%,100%,0)' },
    to: { transform: 'translate3d(0,0,0)' },
  },
  enterDown: {
    from: { transform: 'translate3d(5%,-100%,0)' },
    to: { transform: 'translate3d(0,0,0)' },
  },
  exitUp: {
    to: { transform: 'translate3d(5%,-100%,0)' },
  },
  exitDown: {
    to: { transform: 'translate3d(7%,100%,0)' },
  },
})
