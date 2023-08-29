import { Card } from "../components";
import { Movie } from "../models/movie";
import { useSearchParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

const key = process.env.REACT_APP_API_KEY || "";

export const Search = ({ apiPath = "" }) => {
	const [searchParams] = useSearchParams();
	const searchTerm = searchParams.get("q");
	const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${searchTerm}`;

	const { data } = useFetch(url);
	console.log(data);
	const movies = data?.total_results ? data.results : null;

	return (
		<main>
			<section>
				<p className="text-2xl text-gray-700 dark:text-white">
					{movies !== null ? data?.total_results : `No`} results found '{searchTerm}'
				</p>
			</section>
			<section className="max-w-7xl mx-auto py-7">
				<div className="grid gap-8 xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center">{movies !== null ? movies?.map((movie: Movie, i: number) => <Card key={movie?.id ? movie?.id : i} movie={movie} />) : null}</div>
			</section>
		</main>
	);
};
