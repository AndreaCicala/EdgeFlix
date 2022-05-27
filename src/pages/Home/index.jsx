import { useState, useEffect } from "react";
import {
  getPopularShows,
  getTopRatedTv,
  getUpcomingMovies,
} from "./../../libs/utils";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import Slider from "../../components/Slider";
import SearchResults from "../../components/SearchResults";
import styles from "./style.module.scss";
import Footer from "../../components/Footer";

function Home() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
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
  }, []);

  return (
    <div>
      <Nav className={styles.nav} function={setSearchQuery} />
      <Hero />
      {searchQuery ? (
        <SearchResults searchQuery={searchQuery} />
      ) : (
        <>
          <Slider title={"Airing Today"} results={upcoming} />
          <Slider
            title={"Popular series"}
            results={popular}
            searchQuery={searchQuery}
          />
          <Slider title={"Top Rated Series"} results={topRated} />
        </>
      )}
       <Footer/>
    </div>
  );
}

export default Home;
