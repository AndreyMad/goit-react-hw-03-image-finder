import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
import Loader from "react-loader-spinner";
import style from "./Loader.module.css";

const LoaderSpinner = () => {
  return (
    <div className={style.loader_wrapper}>
      <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />;
    </div>
  );
};

export default LoaderSpinner;
