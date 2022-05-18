import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getTvDetails } from "../../libs/utils";
import { FaArrowUp } from "react-icons/fa";
import DataTable from "../../components/Table";
import YoutubeEmbed from "../../components/Video";
import styles from "./style.module.scss";

const Movie = () => {
  const { id } = useParams();

  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const executeScroll2 = () => myRef2.current.scrollIntoView();

  const [movies, setMovies] =useState([])
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");
  const [genres, setGenres] = useState("");
  
  const getData = async () => {
    const data = await getTvDetails(`/${id}`);
    setMovies(data.seasons);
    setTitle(data.name);
    setPoster(data.backdrop_path);
    setDescription(data.overview);
    setGenres(data.genres.map((item) => item.name).join(", ")
    );
  };

  /* eslint-disable */
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button onClick={executeScroll} ref={myRef2} className={styles.dets_btn}>
        Go to Details{" "}
      </button>
      <YoutubeEmbed />
      <div className={styles.detail}>
        <p className={styles.name} ref={myRef}>
          {title}
        </p>
        <img
          src={"https://image.tmdb.org/t/p/original/" + poster}
          alt={""}
          className={styles.Img}
        />
        <p className={styles.desc}>{description}</p>
        <p className={styles.genres}>Genres: {genres}</p>
          <DataTable movies={movies}/>

          {<FaArrowUp onClick={executeScroll2} className={styles.up_btn}/>}
      </div>
    </>
  );
};

export default Movie;
