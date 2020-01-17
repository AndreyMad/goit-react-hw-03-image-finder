import React, { Component } from "react";
import Loader from "./Loader/Loader";
import * as api from "../Services/Api";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";

class App extends Component {
  state = {
    items: [],
    searchQuery: "",
    loader: false
  };

  componentDidMount() {
    this.getRequest();
  }

  handleSearchQuery = e => {
    this.setState({ searchQuery: e.target.value });
  };

  searchFunc = e => {
    e.preventDefault();
    this.getRequest(this.state.searchQuery);
  };

  getRequest = query => {
    api
      .searchQuery(query)
      .then(response => this.setState({ items: response.data.hits }));
  };

  render() {
    const { items, loader } = this.state;
    return (
      <>
        <Loader isLoader={loader} />
        <Searchbar
          handleSearchQuery={this.handleSearchQuery}
          searchFunc={this.searchFunc}
        />
        <ImageGallery items={items} />
        <Button />
      </>
    );
  }
}

export default App;
