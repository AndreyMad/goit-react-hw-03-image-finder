import React from "react";
import style from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm}>
        <button type="submit" className={style.SearchForm_button}>
          <span className={style.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={style.SearchForm_input}
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
