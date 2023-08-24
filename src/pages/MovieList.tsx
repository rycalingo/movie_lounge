import { Card } from "../components";
import { Movie } from "../models/movie";
import { useFetch } from "../hooks/useFetch";

const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`;

export const MovieList = () => {
  const { data: movies } = useFetch(api_url);

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
