import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const Card = (props) => {
  const { id, name, poster_path } = props.movie;

  return (
    <div className={styles.card}>
      <Link to={`/movie/${id}`}>
        {name}
        <img
          src={"https://image.tmdb.org/t/p/original/" + poster_path}
          alt={name}
          className={styles.cardImg}
        />
      </Link>
    </div>
  );
};

export default Card;
