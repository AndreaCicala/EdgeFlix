import { useEffect, useState } from "react";
import { getHomePageBg } from "../../libs/utils";
import styles from "./style.module.scss";

function Hero() {

  const [backgroundImg, setBackgroundImg] = useState([]);

  useEffect(() => {
    getHomePageBg().then((res) => {
      setBackgroundImg(
        `https://image.tmdb.org/t/p/original${res.backdrop_path}`
      );
    });
  }, []);

  return (
    <div className={styles.hero}>
      <img src={backgroundImg} alt="aot" className={styles.imgHero} />
    </div>
  );
}



export default Hero;
