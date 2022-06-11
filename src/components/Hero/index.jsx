import { useEffect, useState } from "react";
import { getHomePageBg } from "../../libs/utils";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./style.module.scss";

function Hero() {

  const [backgroundImg, setBackgroundImg] = useState([]);
  const [id, setId] = useState("")

  console.log(id)

  useEffect(() => {
    getHomePageBg().then((res) => {
      setBackgroundImg(
        `https://image.tmdb.org/t/p/original${res.backdrop_path}`
      );
      setId(res.id)
    })
  }, []);

  const Button = styled.button``;
  const ButtonTwo = styled.button`
  margin-left: 50px;
  background-color: grey`;

  return (
    <div className={styles.hero}>
      <img src={backgroundImg} alt="aot" className={styles.imgHero} />
      <div>
        <a target='_blank' href="/https://www.netflix.com/watch/70298554?trackId=255824129">
          <Button className={styles.btn}>Play</Button>
        </a>
        <Link to={`/movie/${id}`}>
          <ButtonTwo className={styles.btn}>Details</ButtonTwo>
        </Link>
      </div>
    </div>
  );
}



export default Hero;
