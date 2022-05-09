import styles from "./style.module.scss";

const empty = () => {};

function ArrowRight(props) {

  const cb = props.cb || empty;

  return (
    <div className={styles.arrow2} onClick={cb}>
        <div className={styles.arrow2_top2}></div>
        <div className={styles.arrow2_bottom2}></div>
    </div>
  );
}

export default ArrowRight;
