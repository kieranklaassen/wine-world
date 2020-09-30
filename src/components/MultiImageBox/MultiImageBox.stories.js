import React from "react";
import MultiImageBox from './MultiImageBox'

const images = [
  'https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406266/ulmdda3oesjrkrtdckse.jpg',
  'https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406284/ewgicilm9igwwf2jf08v.jpg',
  'https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406286/eu3srvlbpxj95ynvsjjv.jpg',
]

export const threeImages = () => {
  return (
    <div className="m-12">
      <MultiImageBox images={images} />
    </div>
  )
}

export const overlayActive = () => {
  return (
    <div className="m-12">
      <MultiImageBox images={images} overLayOpen />
    </div>
  )
}

export const oneImage = () => {
  return (
    <div className="m-12">
      <MultiImageBox images={images.slice(0, 1)} />
    </div>
  )
}

export const twoImages = () => {
  return (
    <div className="m-12">
      <MultiImageBox images={images.slice(0, 2)} />
    </div>
  )
}

export default { title: 'Components/MultiImageBox' }
