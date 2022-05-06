
import styles from "./style.module.scss";

function Nav() {
  return (
    <div className={styles.nav}>
      <a href="https://fontmeme.com/netflix-font/">
        <img
          src="https://fontmeme.com/permalink/220505/5fffe0dd23c9099d1b4842a17790e97d.png"
          alt="logo"
          border="0"
          width={"150px"}
        ></img>
      </a>
      <nav className={styles.nav_bar}>
        <ul className={styles.nav_ul}>
          <li>
            <a href="#Home">Main TV Series</a>
          </li>
          <li>
            <a href="#topRated">Top Rated TV Shows</a>
          </li>
          <li>
            <a href="#popularTvShows">Popular TV Shows</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
