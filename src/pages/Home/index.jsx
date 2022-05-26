import { useState, useEffect } from "react";
import { getPopularShows, getTopRatedTv, getUpcomingMovies, getLatest } from "./../../libs/utils";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import Slider from "../../components/Slider";
import styles from "./style.module.scss";

function Home() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [latest, setLatest] = useState();
  const [searchQuery, setSearchQuery] = useState("");
 
  useEffect(() => {
    getPopularShows().then((res) => {
      setPopular(res.results);
    });
    getTopRatedTv().then((res) => {
      setTopRated(res.results);
    });
    getUpcomingMovies().then((res) => {
      setUpcoming(res.results);
    });
    getLatest().then((res) => {
      setLatest(res);
      
    });
  }, []);

  console.log(latest)

  return (
    <div>
      <Nav className={styles.nav} function={setSearchQuery}/>
      <Hero />
      <Slider
        title={"Airing Today"}
        results={upcoming}
        searchQuery={""}
      />
       {/* <Slider
        title={"Latest TV Shows"}
        results={latest}
        searchQuery={""}
      /> */}
      <Slider
        title={"Popular series"}
        results={popular}
        searchQuery={searchQuery}
      />
      <Slider
        title={"Top Rated Series"}
        results={topRated}
        searchQuery={""}
      />
    </div>
  );
}

export default Home;
