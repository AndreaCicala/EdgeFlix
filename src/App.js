import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import styles from "./style.module.scss";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Loading/>}>
              {""}
              <Home />
            </Suspense>
          }
        ></Route>
      </Routes>
      <div className={styles.app}>
        <Nav className={styles.nav} />
        <Hero />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
