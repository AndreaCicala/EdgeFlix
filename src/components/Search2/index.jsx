import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./style.module.scss";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [iconActive, setIconActive] = useState("false");
  const toggleSearch = () => setIconActive((value) => !value);

  const classes = [
    styles.search_box,
    iconActive === true ? styles.active : "",
    styles.search_box__input,
    iconActive === true ? styles.active : "",
  ];

  const classesInp = [
    styles.search_box__input,
    iconActive === true ? styles.active : "",
  ];



  return (
    <div className={classes.join(" ")}>
      <label htmlFor="search"></label>
      <FaSearch className={styles.search_box__icon} onClick={toggleSearch} />
      <input
        className={classesInp.join(" ")}
        placeholder="Search for title"
        type="text"
        id="search"
        name="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
