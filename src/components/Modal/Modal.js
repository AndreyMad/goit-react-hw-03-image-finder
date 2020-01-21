import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Modal.module.css";

class Modal extends Component {
  static propTypes = {
    modalItemUrl: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { closeModal } = this.props;
    window.addEventListener("keydown", closeModal);
  }

  componentWillUnmount() {
    const { closeModal } = this.props;
    window.removeEventListener("keydown", closeModal);
  }

  // closeModal = e => {
  //   console.log(e);
  //   if (e.keyCode === "Escape" || e.target.className !== "Overlay") return;

  //   this.setState({ showModal: false, modalItemUrl: "" });
  // };

  render() {
    const { closeModal, modalItemUrl } = this.props;
    return (
      <div
        className={style.Overlay}
        onClick={closeModal}
        onKeyDown={closeModal}
        role="presentation"
      >
        <div className={style.Modal}>
          <img src={modalItemUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
