import React from "react";
import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ item, openModal }) => (
  <img
    className={style.ImageGalleryItem_image}
    id={item.id}
    src={item.webformatURL}
    alt={item.tags}
    onClick={openModal}
    role="presentation"
  />
);

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  openModal: PropTypes.func.isRequired
};

export default ImageGalleryItem;
