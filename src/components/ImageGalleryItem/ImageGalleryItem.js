import React from "react";
import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ item }) => {
  return (
    <img
      className={style.ImageGalleryItem_image}
      src={item.webformatURL}
      alt={item.tags}
    />
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
  }).isRequired
};

export default ImageGalleryItem;
