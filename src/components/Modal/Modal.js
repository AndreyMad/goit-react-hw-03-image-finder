import React, { Component } from "react";
import style from "./Modal.module.css";

class Modal extends Component {
  state = {
    items: this.props.items
  };

  static propTypes = {
    items: this.propTypes.arr.isRequired
  };

  render() {
    const { items } = this.state;
    return (
      <div className={style.Overlay}>
        <div className={style.Modal}>
          <img src={items} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
