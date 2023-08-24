import { useEffect, useState } from "react";
import { Card } from "../components";
import { Movie } from "../models/movie";

const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`;

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    const response = await fetch(api_url);
    const data = await response.json();
    setMovies(data.results);
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap other:justify-evenly">
          {movies?.map((movie: Movie, i) => (
            <Card key={movie?.id ? movie?.id : i} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
