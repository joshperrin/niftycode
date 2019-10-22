import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useTransition, animated, config } from 'react-spring'

import SlideButton from './buttons/slideButton'
import { ProductPrice } from './products/productcard'

const ImageSlider = ({ product: { price, etsyImages, images } }) => {
  /* --------------
    State
  ---------------- */
  const [imageIndex, setImageIndex] = useState(0)

  /* --------------
    Variables
  ---------------- */
  const sliderImages = etsyImages || images || false
  const lastImageIndex = sliderImages.length - 1
  const lastImage = imageIndex === lastImageIndex
  const firstImage = imageIndex === 0

  /* --------------
    Transition
  ---------------- */
  const transitions = useTransition(sliderImages[imageIndex], null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  /* --------------
    Actions
  ---------------- */
  const slide = (direction) => {
    if (direction === 'left' && imageIndex > 0) setImageIndex(imageIndex - 1)
    if (direction === 'right' && imageIndex < lastImageIndex) setImageIndex(imageIndex + 1)
  }

  return (
    <Images>
      {/* {sliderImages && !firstImage && (
        <SlideButton
          position={{ top: '150px', left: '-120px' }}
          direction="left"
          action={() => slide('left')}
        />
      )}
      {sliderImages && !lastImage && (
        <SlideButton
          position={{ top: '150px', right: '-120px' }}
          direction="right"
          action={() => slide('right')}
        />
      )} */}
      <ImageFrame>
        <ProductPrice top="10px" left="10px" size="50px">
          {`$${price || 0}`}
        </ProductPrice>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Image imageurl={item} />
          </animated.div>
        ))}
      </ImageFrame>
    </Images>
  )
}

ImageSlider.propTypes = {
  product: PropTypes.object.isRequired,
}

const Images = styled.div`
  position: relative;
  width: 550px;
  height: 350px;
  margin: 0 auto;
`

const ImageLoad = styled.img`
  opacity: 0;
  visibility: hidden;
`

const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  border: 10px solid #ffffff;
  box-shadow: 0 2px 4px 0 rgba(207,207,207,0.77);
`

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${props => props.imageurl}) no-repeat center center;
  background-size: cover;
`

export default ImageSlider
