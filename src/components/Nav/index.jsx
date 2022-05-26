import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "./style.module.scss";

function Nav(props) {
  
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

  useEffect(() => {
    props.function(searchInput);
    /* eslint-disable */
  },[searchInput])
  
  return (
    
    <div className={styles.nav}>
      <div>
        <Link to={"/"}>
          <img
            src="https://fontmeme.com/permalink/220505/5fffe0dd23c9099d1b4842a17790e97d.png"
            alt="logo"
            border="0"
            width={"150px"}
          ></img>
        </Link>
      </div>
      <nav className={styles.nav_bar}>
        <ul className={styles.nav_ul}>
          <Link to={`/`} className={styles.link}>
            Main TV Series
          </Link>
          <Link to={`Home`} className={styles.link}>
            Popular TV Series
          </Link>
        </ul>
      </nav>
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
    </div>
  );
}

export default Nav;
