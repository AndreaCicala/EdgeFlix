import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const Card = (props) => {
  const { id, name, poster_path } = props.movie;

  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover(!false);

  const classes = [styles.cardTitle, hover === true ? styles.titleHover : styles.cardTitle];

  return (
    
    <div className={styles.card}>
      <p className={classes.join(" ")}>{name}</p>
      <Link to={`/movie/${id}`}>
        <img
          src={"https://image.tmdb.org/t/p/original/" + poster_path}
          alt={name}
          className={styles.cardImg}
          onMouseEnter={toggleHover}
          onMouseLeave={setHover}
        />
      </Link>
    </div>
  );
};

export default Card;
