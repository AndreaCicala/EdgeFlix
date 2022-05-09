import styles from "./style.module.scss";

const empty = () => {};

function ArrowLeft(props) {
  // const [isClicked, setClicked] = useState(false);

  // const toggleClick = () => {
  //   setClicked(true);
  //   setTimeout(() => {
  //     setClicked(false);
  //   }, 800);
  // };

  const cb = props.cb || empty;

  return (
 
    <div className={styles.arrow} onClick={cb}>
        <div className={styles.arrow_top}></div>
        <div className={styles.arrow_bottom}></div>
    </div>
    
    
  );
}

export default ArrowLeft;
