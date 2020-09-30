import React from "react";
import PropTypes from "prop-types";

import { IconButton } from '@material-ui/core'
import CloseIcon from "@material-ui/icons/Close";
import "./../../index.css";

import ImageResizeContainer from "./../ImageResizeContainer/ImageResizeContainer";

const ImageOverlay = ({ image, close, withBackdrop }) => {
  return (
    <div className="absolute inset-0 flex justify-center w-full h-full overflow-y-auto" style={{ zIndex: 1200 }}>
      {withBackdrop && <div onClick={close} className="fixed w-full h-full opacity-50 bg-vine-500 modal-overlay"></div>}
      <div className="relative z-20 max-w-4xl mx-auto">
        <div className="m-2 overflow-hidden rounded-lg shadow sm:shadow-lg sm:m-4 lg:shadow-2xl">
          <div className="absolute top-0 right-0 z-30">
            <IconButton aria-label="close" onClick={close}>
              <CloseIcon />
            </IconButton>
          </div>
          <ImageResizeContainer src={image} maxWidth={1200} transform="c_thumb" />
        </div>
      </div>
    </div>
  );
}

ImageResizeContainer.propTypes = {
  image: PropTypes.string.isRequired,
  close: PropTypes.func,
  withBackdrop: PropTypes.bool
}

ImageOverlay.defaultProps = {
  image: null,
  close: undefined,
  withBackdrop: false
}

export default ImageOverlay
