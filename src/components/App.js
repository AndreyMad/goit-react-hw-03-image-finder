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
    isLoad: true,
    showModal: false,
    modalItemUrl: "",
    page: 1
  };

  componentDidMount() {
    this.getRequest();
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (page !== prevState.page) {
      api.searchQuery(searchQuery, page).then(response =>
        this.setState(state => ({
          items: [...state.items, ...response.data.hits]
        }))
      );
    }

    // window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: "smooth"
    // });
  }

  handleSearchQuery = e => {
    this.setState({ searchQuery: e.target.value });
  };

  scrollTo = height => {
    window.scrollTo({
      top: height,
      behavior: "smooth"
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  };

  searchFunc = e => {
    e.preventDefault();
    this.setState({ isLoad: true });
    const { searchQuery } = this.state;
    this.getRequest(searchQuery);
  };

  getRequest = query => {
    this.setState({ isLoad: true });
    api
      .searchQuery(query)
      .then(response => this.setState({ items: response.data.hits }))
      .finally(this.setState({ isLoad: false }));
  };

  openModal = ({ target }) => {
    const { items } = this.state;
    const modalItemUrl = items.find(item => {
      return item.id === Number(target.id);
    }).largeImageURL;
    this.setState({ showModal: true, modalItemUrl });
  };

  closeModal = e => {
    if (e.code === "Escape" || e.target.className.includes("Overlay")) {
      this.setState({ showModal: false, modalItemUrl: "" });
    }
  };

  render() {
    const { showModal, modalItemUrl, items, isLoad } = this.state;
    return (
      <>
        {isLoad && <LoaderSpinner />}
        <Searchbar
          handleSearchQuery={this.handleSearchQuery}
          searchFunc={this.searchFunc}
        />
        <ImageGallery items={items} openModal={this.openModal} />
        {items.length > 0 && <Button loadMore={this.loadMore} />}
        {showModal && (
          <Modal modalItemUrl={modalItemUrl} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
