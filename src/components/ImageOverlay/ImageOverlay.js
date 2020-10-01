import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import './../../index.css'

import ImageResizeContainer from './../ImageResizeContainer/ImageResizeContainer'

const ImageOverlay = ({ image, images, close, withBackdrop }) => {
  const [activeImage, setActiveImage] = useState(image)

  const next = () => {
    const nextIndex = (images.indexOf(activeImage) + 1) % images.length
    setActiveImage(images[nextIndex])
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center w-full h-full overflow-y-auto"
      style={{ zIndex: 1200 }}
    >
      <div
        onClick={close}
        className={clsx([
          'fixed w-full h-full bg-vine-500 modal-overlay',
          { 'opacity-50': withBackdrop, 'opacity-0': !withBackdrop }
        ])}
      ></div>
      <div className="z-20 max-w-3xl mx-auto">
        <div className="relative row-span-6 m-2 overflow-hidden rounded-lg shadow sm:shadow-lg sm:mt-8 lg:shadow-2xl">
          <div className="absolute top-0 right-0 z-30 p-2">
            <IconButton
              aria-label="close"
              onClick={close}
              style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          {/* TODO: Add chevron to show you can go to next picture */}

          {images.length > 1 ? (
            images.map(image => {
              return (
                <div className="cursor-pointer" onClick={() => next()}>
                  <div
                    className={clsx({ hidden: activeImage != image, block: activeImage == image })}
                  >
                    <ImageResizeContainer src={image} maxWidth={1200} transform="c_thumb" />
                  </div>
                </div>
              )
            })
          ) : (
            <ImageResizeContainer src={activeImage} maxWidth={1200} transform="c_thumb" />
          )}
        </div>
      </div>
    </div>
  )
}

ImageResizeContainer.propTypes = {
  image: PropTypes.string.isRequired,
  images: PropTypes.arrayOf,
  close: PropTypes.func,
  withBackdrop: PropTypes.bool
}

ImageOverlay.defaultProps = {
  image: null,
  images: [],
  close: undefined,
  withBackdrop: false
}

export default ImageOverlay
