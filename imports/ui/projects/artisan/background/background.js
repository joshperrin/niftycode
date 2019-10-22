import React, { Fragment } from 'react'

import Triangles from '../components/shapes/trianlges'
import { BackgroundOverlay, BackgroundImage } from '../components/background'


const Background = () => (
  <Fragment>
    <BackgroundOverlay />
    <BackgroundImage />
    <Triangles />
  </Fragment>
)

export default Background
