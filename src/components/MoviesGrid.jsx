//import movies from "./movies.json"
import { useEffect, useState } from "react";
import styles from "./MoviesGrid.module.css"
import {MovieCard} from "./MovieCard"
import { get } from "../utils/httpClient"
import { Spiner } from "../components/Spiner"
import { useLocation } from "react-router-dom";

function useQuery(){
  return new URLSearchParams(useLocation().search)
}

export function MoviesGrid(){
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const query = useQuery();
  const search = query.get("search")

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search 
      ? "/search/movie?query=" + search 
      : "/discover/movie"
    get(searchUrl).then((data) => {
      setMovies(data.results)
      setIsLoading(false)
    })
  }, [search]);
  if (isLoading){
    return <Spiner />
  }
  return (
    <ul className={styles.MovieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}