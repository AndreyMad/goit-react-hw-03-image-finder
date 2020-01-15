import React from "react";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = item => {
  //   console.log(item);
  return (
    <img
      src={item.webformatURL}
      alt={item.tags}
      className={style.ImageGalleryItem_image}
    />
  );
};

export default ImageGalleryItem;
