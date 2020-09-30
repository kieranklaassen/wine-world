import React from "react";
import PropTypes from "prop-types";

const ImageResizeContainer = ({ src, transform, maxWidth}) => {

  // TODO: make this work nicer for high pixel density screens
  const breakpoints = [200, 400, 800, 1600, maxWidth].filter((bp) => {
    return bp <= maxWidth
  })
  const preloadSrc = src.replace('image/upload/', `image/upload/w_32/`)
  const srcSet = breakpoints.map((breakpoint) => {
    const options = [`w_${breakpoint}`, transform].join(',')
    const sizedImage = src.replace('image/upload/', `image/upload/${options}/`)
    return `${sizedImage} ${breakpoint}w`
  })

  return (
    <div className="relative overflow-hidden">
      <img
        src={srcSet[0]}
        srcSet={srcSet.join(', ')}
        sizes="(min-width: 640px) 640px, 100vw" // TODO: determin the maximum size for images
        alt="A wine bottle" // TODO: Add alt
        className="relative z-20"
        width={`${maxWidth}px` || '100%'}
        height="100%"
      />
      <div
        style={{
          backgroundImage: `url(${preloadSrc})`,
          filter: 'blur(12px)',
        }}
        className="absolute inset-0 z-0 bg-gray-200 bg-cover animate-pulse"
      ></div>
    </div>
  )
}

ImageResizeContainer.propTypes = {
  src: PropTypes.string.isRequired,
  transform: PropTypes.string, // https://cloudinary.com/documentation/image_transformation_reference
  maxWidth: PropTypes.number,
};


ImageResizeContainer.defaultProps = {
  src: undefined,
  transform: undefined,
  maxWidth: 1600
}

export default ImageResizeContainer
