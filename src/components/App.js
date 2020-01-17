import React, { Component } from "react";
import * as api from "../Services/Api";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.getRequest();
  }

  getRequest = query => {
    api
      .searchQuery(query)
      .then(response => this.setState({ items: response.data.hits }));
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <Searchbar />;
        <ImageGallery items={items} />
      </>
    );
  }
}

export default App;
