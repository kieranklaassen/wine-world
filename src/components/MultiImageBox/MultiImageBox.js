import { useState } from React from 'react'

import clsx from 'clsx'
import PropTypes from 'prop-types'
import './../../index.css'

import ImageOverlay from './../ImageOverlay/ImageOverlay'
import ImageResizeContainer from './../ImageResizeContainer/ImageResizeContainer'

const MultiImageBox = ({ images, overLayOpen }) => {
  const [activeImage, setActiveImage] = useState(images[0])
  const [overLay, setOverLay] = useState(!!overLayOpen)

  const ImageSwitcher = () => {
    return images.map((image, id) => (
      <div
        key={id}
        className={clsx({
          'border-vine-400 border-b-4': activeImage == image
        })}
      >
        <button
          className="overflow-hidden transition duration-300 ease-in-out rounded-lg focus:outline-none focus:shadow-outline hover:opacity-75"
          onMouseEnter={() => {
            if (image != activeImage) setActiveImage(image)
          }}
          onClick={() => setOverLay(true)}
          type="button"
        >
          <ImageResizeContainer src={image} transform="c_thumb" maxWidth={400} />
        </button>
      </div>
    ))
  }

  return (
    <div>
      {overLay && (
        <ImageOverlay
          close={() => setOverLay(false)}
          image={activeImage}
          withBackdrop
          images={images}
        />
      )}
      <div className="relative z-0 grid max-w-md grid-cols-3 gap-1 sm:gap-2">
        <div className="col-span-3 overflow-hidden rounded-lg">
          <div className="cursor-pointer" onClick={() => setOverLay(true)}>
            {images.map(image => {
              return (
                <div
                  className={clsx({ hidden: activeImage != image, block: activeImage == image })}
                >
                  <ImageResizeContainer src={image} maxWidth={1200} transform="c_thumb" />
                </div>
              )
            })}
          </div>
        </div>
        {images.length > 1 && ImageSwitcher()}
      </div>
    </div>
  )
}

MultiImageBox.propTypes = {
  images: PropTypes.array.isRequired,
  overLayOpen: PropTypes.bool
}

export default MultiImageBox
