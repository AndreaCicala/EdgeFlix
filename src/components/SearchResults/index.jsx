import { useEffect, useRef, useState } from "react";
import { searchTvShows } from "../../libs/utils";
import Slider from "../Slider";

const SearchResults = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchTvShows(props.searchQuery).then((res) => {
      setMovies(res.results);
    })
    /* eslint-disable */
  }, [props.searchQuery]);

  return (
    <Slider title={"Search Results"} results={movies} />
  )
};

export default SearchResults;