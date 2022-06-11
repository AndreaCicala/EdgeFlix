import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import Footer from "./components/Footer"
import styles from "./index.module.scss";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Movie = lazy(() => import(`./pages/Movie`));
  
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
        <Route
          path="Homepage"
          element={
            <Suspense fallback={<Loading/>}>
              {""}
            </Suspense>
          }
        ></Route>
        <Route
            path="/movie/:id"
            element={
              <Suspense fallback={<Loading />}>
              <Movie/>
              </Suspense>
            }
          />
      </Routes>
   
    </Router>
  );
};

export default App;