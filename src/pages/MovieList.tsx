import { Card } from "../components";
import { Movie } from "../models/movie";
import { useFetch } from "../hooks/useFetch";

// interface ErrorResponse {
// 	status_code?: number;
// 	message?: string;
// 	success?: boolean;
// }

// Url api
// `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`;

const key = process.env.REACT_APP_API_KEY || "";

export const MovieList = ({ apiPath = "" }) => {
	const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}`;
	const { data } = useFetch(url);

	const movies = data?.total_results ? data.results : null;

	return (
		<main>
			<section className="max-w-7xl mx-auto py-7">
				<div
					className="movie-list movie-list flex justify-evenly flex-wrap
					other:justify-evenly"
				>
					{movies !== null ? movies?.map((movie: Movie, i: number) => <Card key={movie?.id ? movie?.id : i} movie={movie} />) : null}
				</div>
			</section>
		</main>
	);
};
