import { useParams } from "react-router-dom";
import styles from "./style.module.scss";

function DataTable(props) {
  const { id } = useParams();

  return (
    <div className={styles.table} ids={id}>
      {props.movies.map((movie, index) => (
        <div className={styles.rows}>
          <div className={styles.season}>{movie.name}</div>
          <p>Episodes:</p>
          <div className={styles.episode}>{ movie.episode_count }</div>
          <p>First Aired:</p>
          <div className={styles.aired} >{movie.air_date ? movie.air_date : "/"}</div>
        </div>
      ))}
    </div>
  );
}

export default DataTable;
