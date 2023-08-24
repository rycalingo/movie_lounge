import { Link } from "react-router-dom";
import { MovieProps } from "../models/movie";

export const Card = ({ movie }: MovieProps) => {
  const { id, title, poster_path, overview } = movie;
  const img_path = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="movie-card max-w-sm bg-white border border-gray-200 rounded-lg shadow m-3 dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={`${img_path}${poster_path}`} alt={`${title} Movie Poster`} />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
      </div>
    </div>
  );
};
