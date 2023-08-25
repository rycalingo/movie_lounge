import { Card } from "../components";
import { Movie } from "../models/movie";
import { useFetch } from "../hooks/useFetch";

interface MovieListProps {
	api?: string | null;
}

// Url api
// `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`;

export const MovieList = ({ api = "" }: MovieListProps) => {
	const url = `https://api.themoviedb.org/3/${api}?api_key=${process.env.REACT_APP_API_KEY}`;
	const { data: movies } = useFetch(url);

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
