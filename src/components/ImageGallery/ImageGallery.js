import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ items }) => {
  return (
    <ul className="ImageGallery">
      {items.map(item => (
        <li key={item.id}>
          <ImageGalleryItem item={item} />
        </li>
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
export default ImageGallery;
