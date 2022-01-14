//import movies from "./movies.json"
import { useEffect, useState } from "react";
import styles from "./MoviesGrid.module.css"
import {MovieCard} from "./MovieCard"

export function MoviesGrid(){
  const [movies, setMovies] = useState([]) 
  
  useEffect(() => [
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjEwODRjMjk0NjRlZTlhMTNhYmExZDc3ZGM3ZTFlNyIsInN1YiI6IjYxZTFiYTgzYmYwZjYzMDA5YTE3NzQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.35cYaVexS2aEg5_SwIu48gE-31jThjf3GAwCt9MU46Y",
        "Content-type": "application/json;charset=utf-8"
      },
    }).then((result) => result.json())
      .then((data) => {setMovies(data.results)})
  ], []);
  return (
    <ul className={styles.MovieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}