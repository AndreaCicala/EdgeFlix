import { useState, useEffect } from "react";
import { getPopularShows } from "./../../libs/utils";
import Hero from "../../components/Hero";
import Slider from "../../components/Slider";
import Nav from "../../components/Nav";


function Home() {
  const [results, setResults] = useState([]);

  useEffect(()  =>  {
    getPopularShows().then((res) => {
      setResults(res.results);
    });
  }, []);

  return (
    <div>
      <Hero/>
      <Nav title={"Popular series"} results={results} />
    </div>
  );
}

export default Home;
