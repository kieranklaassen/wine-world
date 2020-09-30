import React from "react";
import { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import "./../../index.css";

import ImageOverlay from "./../ImageOverlay/ImageOverlay";
import ImageResizeContainer from "./../ImageResizeContainer/ImageResizeContainer";

const MultiImageBox = ({ images, overLayOpen }) => {
  const [activeImage, setActiveImage] = useState(images[0])
  const [overLay, serOverLay] = useState(!!overLayOpen)

  return (
    <div>
      {overLay && <ImageOverlay close={() => serOverLay(false)} image={activeImage} withBackdrop />}
      <div className="relative z-0 grid max-w-md grid-cols-3 gap-2">
        <div className="col-span-3 overflow-hidden rounded-lg">
          <ImageResizeContainer src={activeImage} transform="c_thumb" maxWidth={1200} />
        </div>
        {images.length > 1
          ? images.map((image, id) => (
              <div
                key={id}
                className={clsx({
                  "border-vine-400 border-b-4": activeImage == image,
                })}
              >
                <button
                  className="overflow-hidden transition duration-300 ease-in-out rounded-lg focus:outline-none focus:shadow-outline hover:opacity-75"
                  onMouseEnter={() => setActiveImage(image)}
                  onClick={() => serOverLay(true)}
                >
                  <ImageResizeContainer src={image} transform="c_thumb" maxWidth={400} />
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

MultiImageBox.propTypes = {
  images: PropTypes.array.isRequired,
  overLayOpen: PropTypes.bool,
}

export default MultiImageBox
