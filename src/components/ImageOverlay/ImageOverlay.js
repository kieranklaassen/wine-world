import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./../../index.css";

import ImageResizeContainer from "./../ImageResizeContainer/ImageResizeContainer";

const ImageOverlay = ({ image, close, withBackdrop }) => {
  return (
    <div className="absolute inset-0 flex justify-center w-full h-full overflow-y-auto" style={{ zIndex: 1200 }}>
      <div
        onClick={close}
        className={clsx([
          "fixed w-full h-full bg-vine-500 modal-overlay",
          { "opacity-50": withBackdrop, "opacity-0": !withBackdrop },
        ])}
      ></div>
      <div className="relative z-20 max-w-3xl mx-auto">
        <div className="m-2 overflow-hidden rounded-lg shadow sm:shadow-lg sm:mt-8 lg:shadow-2xl">
          <div className="absolute top-0 right-0 z-30 p-6 mt-6">
            <IconButton aria-label="close" onClick={close} style={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
              <CloseIcon />
            </IconButton>
          </div>
          <ImageResizeContainer src={image} maxWidth={1200} transform="c_thumb" />
        </div>
      </div>
    </div>
  );
};

ImageResizeContainer.propTypes = {
  image: PropTypes.string.isRequired,
  close: PropTypes.func,
  withBackdrop: PropTypes.bool,
};

ImageOverlay.defaultProps = {
  image: null,
  close: undefined,
  withBackdrop: false,
};

export default ImageOverlay;
