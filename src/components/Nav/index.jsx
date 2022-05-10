import { Link } from "react-router-dom";
import styles from "./style.module.scss";

function Nav() {

  return (
    <div className={styles.nav}>
      <Link to={"/"}>
        <img
          src="https://fontmeme.com/permalink/220505/5fffe0dd23c9099d1b4842a17790e97d.png"
          alt="logo"
          border="0"
          width={"150px"}
        ></img>
      </Link>
      <nav className={styles.nav_bar}>
        <ul className={styles.nav_ul}>
          <Link to={`Home`} className={styles.link}>Main TV Series</Link>
          <Link to={`Home`} className={styles.link}>Popular TV Series</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
