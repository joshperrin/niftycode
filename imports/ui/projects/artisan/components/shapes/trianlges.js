import React, { Fragment } from 'react'
import styled from 'styled-components'

const Triangles = () => (
  <Fragment>
    <TrignleLeftBackground />
    <TrignleRightBackground />
    <TriangleLeft />
    <TriangleRight />
  </Fragment>
)

export default Triangles

const TriangleLeft = styled.div`
  position: fixed;
  z-index: 25;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 40vh 0 0 120vw;
  border-color: transparent transparent transparent rgba(80,167,81,0.20);
`

const TriangleRight = styled.div`
  position: fixed;
  z-index: 25;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 40vh 120vw;
  border-color: transparent transparent rgba(80,167,81,0.20) transparent;
`

const TrignleLeftBackground = styled(TriangleLeft)`
    border-left-color: #134420;
`

const TrignleRightBackground = styled(TriangleRight)`
    border-bottom-color: #134420;
`
