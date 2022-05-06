import styles from "./style.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <hr />
      <p>Copyright © {year} Andrea Cicala </p>
    </footer>
  );
};

export default  Footer ;