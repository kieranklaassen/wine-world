import React from "react";
import ImageOverlay from './ImageOverlay'

export const noBackdrop = () => {
  return (
    <ImageOverlay
      close={() => alert('Closed')}
      image="https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406284/ewgicilm9igwwf2jf08v.jpg"
    />
  )
}

export const withBackdrop = () => {
  return (
    <ImageOverlay
      close={() => alert("Closed")}
      image="https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406284/ewgicilm9igwwf2jf08v.jpg"
      withBackdrop
    />
  );
};

export default { title: 'Components/ImageOverlay' }
