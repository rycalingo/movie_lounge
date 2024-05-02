import { Card } from "../components";
import { Movie } from "../models/movie";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

// interface ErrorResponse {
// 	status_code?: number;
// 	message?: string;
// 	success?: boolean;
// }

// Url api
// `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`;

const key = process.env.REACT_APP_API_KEY || "";

export const MovieList = ({ apiPath = "", title = "" }) => {
	const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}`;
	const { data } = useFetch(url);

	const movies = data?.total_results ? data.results : null;

	useEffect(() => {
		document.title = `${title} - Movie Lounge`;
	});

	return (
		<main>
			<section className="max-w-7xl mx-auto py-7">
				<div className="grid gap-8 md:gap-x-0 xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center">{movies !== null ? movies?.map((movie: Movie, i: number) => <Card key={movie?.id ? movie?.id : i} movie={movie} />) : null}</div>
			</section>
		</main>
	);
};
