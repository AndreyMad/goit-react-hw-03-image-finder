import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import style from "./Loader.module.css";

const LoaderSpinner = () => {
  return (
    <div className={style.loader_wrapper}>
      <Loader
        type="ThreeDots"
        color="red"
        zIndex={10000}
        height={100}
        width={100}
      />
      ;
    </div>
  );
};

export default LoaderSpinner;
