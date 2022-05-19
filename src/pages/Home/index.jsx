import { useState, useEffect } from "react";
import { getPopularShows } from "./../../libs/utils";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import Slider from "../../components/Slider";
import styles from './style.module.scss';

function Home() {
  const [results, setResults] = useState([]);
  const [returnedData, setReturnedData] = useState("");

  const pullData = (data) => {
    setReturnedData(data)
  }
 

  useEffect(() => {
    getPopularShows().then((res) => {
       setResults(res.results);
    });
  }, []);

  return (
    <div>
    <Nav className={styles.nav} function={pullData}/>
      <Hero/>
      <Slider title={"Popular series"} results={results} returnedData={returnedData} />
    </div>
  );
}

export default Home;
