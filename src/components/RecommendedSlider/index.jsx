import { useEffect, useRef, useState } from "react";
import Arrow from "../Arrow";
import Card from "../Card";
import styles from "./style.module.scss";

const RecommendedSlider = ({ results, title }) => {
  const [movies, setMovies] = useState([results]);

  const scrl = useRef(null);
  const slide = (cardWidth = 200) => {
    const numberVisibleCard = Math.floor(scrl.current.offsetWidth / cardWidth);
    return numberVisibleCard * cardWidth;
  };

  useEffect(() => {
    setMovies(results);
  }, [results]);

  return (
    <div className={styles.movies}>
      <div className={styles.arrow_div}>
        <Arrow
          dx={() => (scrl.current.scrollLeft += slide())}
          sx={() => (scrl.current.scrollLeft += -1 * slide())}
        />
      </div>
      <div className={styles.recommended_series} ref={scrl}>
        <h2 className={styles.recommended_title}>{title}</h2>
        {movies.map((movie, index) => (
          <Card movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};



export default RecommendedSlider;
