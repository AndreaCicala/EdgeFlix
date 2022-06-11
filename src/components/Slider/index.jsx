import { style } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import Arrow from "../Arrow";
import Card from "../Card";
import styles from "./style.module.scss";

const Slider = (props) => {
 
  const moviesData = props.results;
  const [movies, setMovies] = useState([]);

  const scrl = useRef(null);
  const slide = (cardWidth = 200) => {
    const numberVisibleCard = Math.floor(scrl.current.offsetWidth / cardWidth);
    return numberVisibleCard * cardWidth;
  };

  useEffect(() => {
    setMovies(moviesData);
  }, [moviesData]);

  // useEffect(() => {
  //   if (props.searchQuery.length === 0){
  //     setMovies(moviesData)
  //   } else {
  //     const filtered = movies.filter((movie) =>
  //       movie.name.toLowerCase().includes(props.searchQuery.toLowerCase())
  //       );
  //     console.log(filtered)
  //     setMovies(filtered);
  //     /* eslint-disable */
  //   }
  // }, [props.searchQuery]);

  return (
    <>
      <div className={styles.arrow_div}>
        <Arrow
          dx={() => (scrl.current.scrollLeft += slide())}
          sx={() => (scrl.current.scrollLeft += -1 * slide())}
        />
      </div>
      <div className={styles.movie_series} ref={scrl}>
        <h2 className={styles.movie_title}>{props.title}</h2>
        {movies.map((movie, index) => (
          <Card movie={movie} key={index} />
        ))}
      </div>
    </>
  );
};

export default Slider;
