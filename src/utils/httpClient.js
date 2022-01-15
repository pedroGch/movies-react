const api = "https://api.themoviedb.org/3";

export function get(path){
  return fetch( api + path, {
      headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjEwODRjMjk0NjRlZTlhMTNhYmExZDc3ZGM3ZTFlNyIsInN1YiI6IjYxZTFiYTgzYmYwZjYzMDA5YTE3NzQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.35cYaVexS2aEg5_SwIu48gE-31jThjf3GAwCt9MU46Y",
        "Content-type": "application/json;charset=utf-8"
      },
    }).then((result) => result.json())
}