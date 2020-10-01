import React, { useState } from 'react'

import clsx from 'clsx'
import PropTypes from 'prop-types'
import './../../tailwind.css'

import ImageOverlay from './../ImageOverlay/ImageOverlay'
import ImageResizeContainer from './../ImageResizeContainer/ImageResizeContainer'

const MultiImageBox = ({ images, overLayOpen }) => {
  const [activeImage, setActiveImage] = useState(images[0])
  const [overLay, setOverLay] = useState(!!overLayOpen)

  const ImageSwitcher = () => {
    return images.map((image, index) => (
      <div
        key={index}
        className={clsx({
          'border-vine-400 border-b-4': activeImage == image
        })}
      >
        <div
          className="mb-1 overflow-hidden transition duration-300 ease-in-out rounded-lg focus:outline-none focus:shadow-outline hover:opacity-75"
          onMouseEnter={() => {
            if (image != activeImage) setActiveImage(image)
          }}
          onClick={() => setOverLay(true)}
          onKeyUp={event => {
            if (event.key === ' ') setOverLay(true)
          }}
          role="button"
          tabIndex={index}
        >
          <ImageResizeContainer src={image} transform="c_thumb" maxWidth={400} />
        </div>
      </div>
    ))
  }

  return (
    <div>
      {/* Show the overlay if its active */}
      {overLay && (
        <ImageOverlay
          close={() => setOverLay(false)}
          image={activeImage}
          withBackdrop
          images={images}
        />
      )}

      {/* The big picture */}
      <div className="relative z-0 grid max-w-md grid-cols-3 gap-1 sm:gap-2">
        <div className="col-span-3 overflow-hidden rounded-lg">
          <div
            role="button"
            tabIndex="0"
            onKeyUp={event => {
              if (event.key === ' ') setOverLay(true)
            }}
            className="cursor-pointer"
            onClick={() => setOverLay(true)}
          >
            {/* Preload all images */}
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className={clsx({ hidden: activeImage != image, block: activeImage == image })}
                >
                  <ImageResizeContainer src={image} maxWidth={1200} transform="c_thumb" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Show the image switcher if there are more than 1 image */}
        {images.length > 1 && <ImageSwitcher />}
      </div>
    </div>
  )
}

MultiImageBox.propTypes = {
  images: PropTypes.array.isRequired,
  overLayOpen: PropTypes.bool
}

export default MultiImageBox
