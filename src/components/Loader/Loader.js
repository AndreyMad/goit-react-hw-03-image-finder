/* eslint-disable */
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React from "react";
import style from "./Loader.module.css";

export default class App extends React.Component {
  state = {
    isLoader: false
  };

  componentDidMount = () => {
    const { isLoader } = this.props;
    this.setState({ isLoader });
  };

  render() {
    const { isLoader } = this.state;
    return (
      <>
        {isLoader && (
          <div className={style.loader_wrapper}>
            <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
          </div>
        )}
      </>
    );
  }
}
