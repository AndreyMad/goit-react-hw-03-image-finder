import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = items => {
  return (
    <ul className="ImageGallery">
      {items.map(item => (
        <li key={item}>
          <ImageGalleryItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
