import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import './../../tailwind.css'

import ImageResizeContainer from './../ImageResizeContainer/ImageResizeContainer'

const ImageOverlay = ({ image, images, close, withBackdrop }) => {
  const [activeImage, setActiveImage] = useState(image)
  const overlayRef = useRef()

  useEffect(() => {
    overlayRef.current.focus()
  }, [overlayRef])

  const next = () => {
    const nextIndex = (images.indexOf(activeImage) + 1) % images.length
    setActiveImage(images[nextIndex])
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center w-full h-full overflow-y-auto"
      style={{ zIndex: 1200 }}
    >
      {/* Backdrop */}
      <div
        onClick={close}
        onKeyUp={event => {
          if (event.key === ' ') next()
          if (event.key === 'Escape') close()
        }}
        role="button"
        tabIndex="0"
        className={clsx([
          'fixed w-full h-full bg-vine-500 modal-overlay',
          { 'opacity-50': withBackdrop, 'opacity-0': !withBackdrop }
        ])}
      ></div>

      {/* Image Overlay */}
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
            <div
              tabIndex="-1"
              className="cursor-pointer"
              onClick={() => next()}
              onKeyUp={event => {
                if (event.key === ' ') next()
                if (event.key === 'Escape') close()
              }}
              role="button"
              ref={overlayRef}
            >
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
