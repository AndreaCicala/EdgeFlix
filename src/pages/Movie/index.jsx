import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { getTvDetails, getRecommendedSeries } from "../../libs/utils";
import { FaArrowUp } from "react-icons/fa";
import DataTable from "../../components/Table";
import RecommendedSlider from "../../components/RecommendedSlider";
import YoutubeEmbed from "../../components/Video";
import styles from "./style.module.scss";
import Footer from "../../components/Footer";


const Movie = () => {
  const { id } = useParams();
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const executeScroll2 = () => myRef2.current.scrollIntoView();

  const [results, setResults] = useState([]);
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");
  const [genres, setGenres] = useState("");

  const dscClass = [description === "" ? "hide" : styles.desc];
  const genresClass = [genres === "" ? "hide" : styles.genres];

  const getData = async () => {
    const data = await getTvDetails(`/${id}`);
    setMovies(data.seasons);
    setTitle(data.name);
    setPoster(data.backdrop_path);
    setDescription(data.overview);
    setGenres(data.genres.map((item) => item.name).join(", "));
  };

  useEffect(() => {
    getData();
    getRecommendedSeries(`/${id}`).then((res) => {
      setResults(res.results);
    });
  }, [id]);

  return (

    <>
      <Link to={`/`} className={styles.link}>
        Main TV Series
      </Link>
      <button onClick={executeScroll} ref={myRef2} className={styles.dets_btn}>
        Go to Details{" "}
      </button>
      <YoutubeEmbed />
      <div className={styles.detail}>
        <img
          src={"https://image.tmdb.org/t/p/original/" + poster}
          alt={""}
          className={styles.Img}
        />
        <p className={styles.name} ref={myRef}>
          {title}
        </p>
        <p className={dscClass}>{description}</p>
        <p className={genresClass}><i className={genresClass}>Genres: </i>{genres}</p>
        {/* <DataTable movies={movies} /> */}
        {<FaArrowUp onClick={executeScroll2} className={styles.up_btn} />}
        <RecommendedSlider title={"Recommended Series"} results={results} />
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Movie;
