import { useEffect, useState } from "react";
import { Card } from "../components";

const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`;

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    setMovies(data.results);
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-star flex-wrap">
          {movies.map((movie, i) => (
            <Card key={i} />
          ))}
        </div>
      </section>
    </main>
  );
};
