import React from "react";
import ImageOverlay from "./ImageOverlay";

const images = [
  "https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406266/ulmdda3oesjrkrtdckse.jpg",
  "https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406284/ewgicilm9igwwf2jf08v.jpg",
  "https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406286/eu3srvlbpxj95ynvsjjv.jpg",
];

export const noBackdrop = () => {
  return <ImageOverlay close={() => alert("Closed")} image={images[0]} />;
};

export const withBackdrop = () => {
  return <ImageOverlay close={() => alert("Closed")} image={images[1]} withBackdrop />;
};

export const withMulitpleImages = () => {
  return <ImageOverlay close={() => alert("Closed")} image={images[2]} images={images} withBackdrop />;
};

export default { title: "Components/ImageOverlay" };
