import React from 'react'
import PropTypes from 'prop-types'
import './../../index.css'

const ImageResizeContainer = ({ src, transform, maxWidth }) => {
  // TODO: make this work nicer for high pixel density screens
  // TODO: make more efficient so that only max width in included if it's not in current range
  const breakpoints = [200, 400, 800, 1600, maxWidth].filter(bp => {
    return bp <= maxWidth
  })
  const preloadSrc = src.replace('image/upload/', `image/upload/w_32/`)
  const srcSet = breakpoints.map(breakpoint => {
    const options = [`w_${breakpoint}`, transform].join(',')
    const sizedImage = src.replace('image/upload/', `image/upload/${options}/`)
    return `${sizedImage} ${breakpoint}w`
  })

  return (
    <div className="relative overflow-hidden" style={{ maxWidth: `${maxWidth}px` || '100%' }}>
      <img
        src={srcSet[0]}
        srcSet={srcSet.join(', ')}
        sizes="(min-width: 640px) 640px, 100vw" // TODO: determin the maximum size for images
        alt="A wine bottle" // TODO: Add alt
        className="relative z-20"
        width={`${maxWidth}px` || '100%'}
        height={`${maxWidth}px` || '100%'} // TODO: Support non square images
      />
      <div
        style={{
          backgroundImage: `url(${preloadSrc})`
        }}
        className="absolute inset-0 z-0 bg-cover bg-vine-400 animate-pulse"
      ></div>
    </div>
  )
}

ImageResizeContainer.propTypes = {
  src: PropTypes.string.isRequired,
  transform: PropTypes.string, // https://cloudinary.com/documentation/image_transformation_reference
  maxWidth: PropTypes.number
}

ImageResizeContainer.defaultProps = {
  src: undefined,
  transform: undefined,
  maxWidth: 1600
}

export default ImageResizeContainer
