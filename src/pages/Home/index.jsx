import { useState, useEffect } from "react";
import { getPopularShows } from "./../../libs/utils";
import { FaSearch } from "react-icons/fa";
import Card from "./../../components/Card";
import styles from "./style.module.scss";

function Home() {
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState([]);
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
    getPopularShows().then((res) => {
      setMovies(res.results);
      console.log(res);
    });
  }, []);

  useEffect(() => {
    const data = movies.filter((movie) =>
      movie.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setResults(data);
  }, [searchInput, movies]);

  return (
    <div>
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
      <div className={styles.popular_series}>
        {results.map((movie, index) => (
          <div key={index}>
            <Card movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
