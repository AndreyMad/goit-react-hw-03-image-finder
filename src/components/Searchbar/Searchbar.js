import React from "react";
import PropTypes from "prop-types";
import style from "./Searchbar.module.css";

const Searchbar = ({ searchFunc, handleSearchQuery }) => {
  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={searchFunc}>
        <button type="submit" className={style.SearchForm_button}>
          <span className={style.SearchForm_button_label}>Search</span>
        </button>

        <input
          onChange={handleSearchQuery}
          className={style.SearchForm_input}
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  searchFunc: PropTypes.func.isRequired,
  handleSearchQuery: PropTypes.func.isRequired
};
export default Searchbar;
