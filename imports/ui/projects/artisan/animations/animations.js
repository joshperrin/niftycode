

export const fadein = {
  from: { opacity: 0 },
  to: { opacity: 1 },
}

export const fadeOut = {
  to: { opacity: 0 },
}

export const slideRightInFade = {
  from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  to: { opacity: 1, transform: 'translate3d(0,0,0)' },
}

export const slideLeftOutFade = {
  to: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
}

export const slideLeftInFade = {
  from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  to: { opacity: 1, transform: 'translate3d(0,0,0)' },
}

export const slideRightOutFade = {
  to: { opacity: 0, transform: 'translate3d(100%,0,0)' },
}

export const slideUpInFadeCentered = {
  from: { opacity: 0, transform: 'translate3d(-50%,200%,0)' },
  to: { opacity: 1, transform: 'translate3d(-50%,0,0)' },
}

export const slideDownOutFadeCentered = {
  to: { opacity: 0, transform: 'translate3d(-50%,200%,0)' },
}

export const zoomIn = {
  from: { opacity: 0, transform: 'translate3d(-50%,0,0) scale3d(0.6,0.6,0.6)' },
  to: { opacity: 1, transform: 'translate3d(-50%,0,0) scale3d(1,1,1)' },
}

export const zoomOut = {
  to: { opacity: 0, transform: 'translate3d(-50%,0,0) scale3d(0.6,0.6,0.6)' },
}
