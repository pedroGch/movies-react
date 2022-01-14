import { useEffect } from "react";
import { useParams } from "react-router-dom";
import movie from "./movie.json"
import styles from "./MovieDetails.module.css"
export function MovieDetails(){
  const {movieId} = useParams()
  useEffectfect(() => {
    effect
    
  }, []);

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
  <div className={styles.detailsContainer}>
    <img className={styles.col + " " +styles.movieImage} src={imageUrl} alt={movie.title} />
    <div className={styles.col + " " +styles.movieDetails}>
      <p className={styles.firstItem}> <strong>Title:</strong> {movie.title}</p>
      <p> 
        <strong>Genres:</strong> {" "} 
        {movie.genres.map((genre) => genre.name).join(", ")} </p>
      <p> <strong>Description:</strong> {movie.overview}</p>
    </div>
  </div>);
}