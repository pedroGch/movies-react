import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css"
import { get } from "../utils/httpClient"
import { Spiner } from "../components/Spiner";
import { useQuery } from "../hooks/useQuery";

export function MovieDetails(){
  
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then(data => {
      setIsLoading(false);
      setMovie(data);
    })
  }, [movieId]);
  if (isLoading){
    return <Spiner />
  }

  if(!movie){
    return null;
  }
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