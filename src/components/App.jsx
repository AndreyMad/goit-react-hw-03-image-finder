import React, { Component } from "react";
import LoaderSpinner from "./Loader/Loader";
import * as api from "../Services/Api";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

class App extends Component {
  state = {
    items: [],
    searchQuery: "",
    isLoad: false,
    showModal: false,
    modalItemUrl: "",
    page: 1
  };

  // componentDidMount() {
  //   this.getRequest();
  // }

  componentDidUpdate(prevProps, prevState) {
    const { items } = this.state;
    if (prevState.items !== items) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    }
  }

  onSubmit = value => {
    this.setState({ isLoad: true, searchQuery: value }, this.getRequest(value));
  };

  getRequest = value => {
    api
      .searchByQuery(value)
      .then(response => this.setState({ items: response.data.hits }))
      .catch(err => {
        throw new Error(err);
      })
      .finally(() => {
        this.setState({ isLoad: false });
      });
  };

  loadMore = () => {
    const { searchQuery, page } = this.state;
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
    api
      .searchByQuery(searchQuery, page)
      .then(response => {
        this.setState(state => ({
          items: [...state.items, ...response.data.hits]
        }));
      })
      .then();
  };

  openModal = ({ target }) => {
    this.loaderOn();
    const { items } = this.state;
    const modalItemUrl = items.find(item => {
      return item.id === Number(target.id);
    }).largeImageURL;
    this.setState({ showModal: true, modalItemUrl });
  };

  closeModal = e => {
    if (e.code === "Escape" || e.target.className.includes("Overlay")) {
      this.setState({ showModal: false, modalItemUrl: "" });
      this.loaderOff();
    }
  };

  loaderOn = () => {
    this.setState({ isLoad: true });
  };

  loaderOff = () => {
    this.setState({ isLoad: false });
  };

  render() {
    const { showModal, modalItemUrl, items, isLoad } = this.state;
    return (
      <>
        {isLoad && <LoaderSpinner />}
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery items={items} openModal={this.openModal} />
        {items.length > 0 && <Button loadMore={this.loadMore} />}
        {showModal && (
          <Modal
            modalItemUrl={modalItemUrl}
            loaderOff={this.loaderOff}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default App;
