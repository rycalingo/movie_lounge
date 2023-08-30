import { Link } from "react-router-dom";
import { MovieProps } from "../models/movie";
import no_poster from "../static/images/no_poster.png";

export const Card = ({ movie }: MovieProps) => {
	const { id, title, poster_path, overview } = movie;
	const poster_size = "w342/";
	const img_path = `https://image.tmdb.org/t/p/${poster_size}`;

	const addDefaultSrc = (event: any) => {
		event.target.src = no_poster;
	};

	return (
		<div className="movie-card max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto dark:bg-gray-800 dark:border-gray-700">
			<Link to={`/movie/${id}`}>
				<div className="media_poster rounded-t-lg aspect-[2/3] w-full bg-gray-900">
					<img className="rounded-t-lg object-cover mx-auto h-full" onError={addDefaultSrc} src={`${img_path}${poster_path}`} alt={`${title} Movie Poster`} />
				</div>
			</Link>

			<div className="p-5">
				<Link to={`/movie/${id}`}>
					<h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
				</Link>
			</div>
		</div>
	);
};
