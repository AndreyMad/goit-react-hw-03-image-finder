import React, { Component } from "react";
import Loader from "./Loader/Loader";
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
    page: 1
  };

  // componentDidMount() {
  //   this.getRequest();
  //   this.setState({ isLoad: false });
  // }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (page !== prevState.page) {
      api.searchQuery(searchQuery, page).then(response =>
        this.setState(state => ({
          items: [...state.items, ...response.data.hits]
        }))
      );
    }
    this.scrollTo(document.documentElement.scrollHeight);
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
    window.scrollTo({
      top: 10000,
      behavior: "smooth"
    });
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

  render() {
    const { showModal, items, isLoad } = this.state;
    return (
      <>
        {isLoad && <Loader isLoad />}
        <Searchbar
          handleSearchQuery={this.handleSearchQuery}
          searchFunc={this.searchFunc}
        />
        <ImageGallery items={items} />
        {items.length > 0 && <Button loadMore={this.loadMore} />}
        {showModal && <Modal items={items} />}
      </>
    );
  }
}

export default App;
