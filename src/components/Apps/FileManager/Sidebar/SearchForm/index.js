"use client";

import * as React from "react";
import styles from "./Search.module.css";

const SearchForm = () => {
  return (
    <>
      <form className={styles.searchBox}>
        <label>
          <i className="material-symbols-outlined">search</i>
        </label>
        <input
          type="text"
          className={styles.inputSearch}
          placeholder="Search here..."
        />
      </form>
    </>
  );
};

export default SearchForm;
