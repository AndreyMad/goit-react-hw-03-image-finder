import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/extensions
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem.jsx";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={style.ImageGallery}>
      {items.map(item => (
        <li key={item.id}>
          <ImageGalleryItem item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  openModal: PropTypes.func.isRequired
};
export default ImageGallery;
