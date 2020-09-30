import React from "react";
import ImageResizeContainer from "./../ImageResizeContainer/ImageResizeContainer";

export const small = () => {
  return (
    <div className="w-64">
      <ImageResizeContainer
        src="https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406286/eu3srvlbpxj95ynvsjjv.jpg"
        maxWidth={256}
      />
    </div>
  )
}

export const profilePicture = () => {
  return (
    <div className="relative inline-block w-16 h-16 overflow-hidden rounded-full">
      <ImageResizeContainer
        src="https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406286/eu3srvlbpxj95ynvsjjv.jpg"
        maxWidth={64}
      />
    </div>
  )
}

export const large = () => {
  return (
    <ImageResizeContainer src="https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406286/eu3srvlbpxj95ynvsjjv.jpg" />
  )
}

export const responsive = () => {
  return (
    <div className="w-full p-4 md:max-w-lg xl:max-w-2xl">
      <ImageResizeContainer src="https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406286/eu3srvlbpxj95ynvsjjv.jpg" />
    </div>
  )
}

export default { title: 'Components/ImageResizeContainer' }
