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
    document.body.style = " overflow: hidden ";
  }

  componentWillUnmount() {
    const { closeModal } = this.props;
    window.removeEventListener("keydown", closeModal);
    document.body.style = "";
  }

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
          <img src={modalItemUrl} alt="" role="presentation" />
        </div>
      </div>
    );
  }
}

export default Modal;
