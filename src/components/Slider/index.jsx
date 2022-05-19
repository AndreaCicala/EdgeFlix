import { useEffect, useRef, useState } from "react";
import ArrowRight from "../ArrowRight";
import ArrowLeft from "../ArrowLeft";
import Card from "../Card";
import styles from "./style.module.scss";

const Slider = (props) => {
  const data = props.results
  const [movieProps, setMovieProps] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);

  const scrl = useRef(null);
  const slide = (cardWidth = 200) => {
    const numberVisibleCard = Math.floor(scrl.current.offsetWidth / cardWidth);
    return numberVisibleCard * cardWidth;
  };

  useEffect(() => {
    setMovieProps(data);
    setMoviesFiltered(data);
  }, [data]);

  
  useEffect(() => {
    const filtered = movieProps.filter((movie) =>
    movie.name.toLowerCase().includes(props.returnedData.toLowerCase())
    );
    setMoviesFiltered(filtered);
  }, [props.returnedData]);
  
  
  return (
    <>
      <ArrowRight cb={() => (scrl.current.scrollLeft += slide())} />
      <ArrowLeft cb={() => (scrl.current.scrollLeft += -1 * slide())} />
      <div className={styles.popular_series} ref={scrl}>
        <h2 className={styles.popular_title}>Popular TV Shows</h2>
        {Array.isArray(moviesFiltered) &&
          moviesFiltered &&
          moviesFiltered.map((movie, index) => (
            <div key={index}>
              <Card movie={movie} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Slider;
