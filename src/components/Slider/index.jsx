import { useRef } from "react";
import ArrowRight from "../ArrowRight";
import ArrowLeft from "../ArrowLeft";
import Card from "../Card";
import styles from "./style.module.scss";

const Slider = (results) => {
  console.log(results)
  const scrl = useRef(null);
  const slide = (cardWidth = 200) => {
    const numberVisibleCard = Math.floor(scrl.current.offsetWidth / cardWidth);
    return numberVisibleCard * cardWidth;
  };

  return (
    <>
      <ArrowRight cb={() => (scrl.current.scrollLeft += slide())} />
      <ArrowLeft cb={() => (scrl.current.scrollLeft += -1 * slide())} />
      <div className={styles.popular_series} ref={scrl}>
        {/* <h2 className={styles.popular_title}>{props.title}</h2>
        {props.results.map((movie, index) => (
          <div key={index}>
            <Card movie={movie} />
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Slider;
