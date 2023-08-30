import { useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

import no_poster from "../static/images/no_poster.png";

const key = process.env.REACT_APP_API_KEY || "";

// "https://api.themoviedb.org/3/movie/615656?api_key=fabb4a30908b66086b46c9b2bac8f1e8"

export const MovieDetail = () => {
	const param = useParams();
	const url = `https://api.themoviedb.org/3/movie/${param.id}?api_key=${key}`;
	const { data } = useFetch(url);

	const movie = data ? data : {};

	const poster_size = "w500/";
	const img_path = `https://image.tmdb.org/t/p/${poster_size}`;

	const addDefaultSrc = (event: any) => {
		event.target.src = no_poster;
	};

	useTitle(`${movie?.title} - Movie Lounge`);

	return (
		<main>
			<section className="flex justify-around flex-wrap xs:flex-col py-5 pt-10">
				<div className="max-w-sm">
					<img className="rounded-lg object-cover mx-auto" onError={addDefaultSrc} src={`${img_path}${movie?.poster_path}`} alt={`${movie?.title} Movie Poster`} />
				</div>
				<div className="max-w-2xl text-grey-700 text-lg p-4 dark:text-white">
					<h1 className="text-4xl font-bold my-3">{movie?.title}</h1>

					<p className="tagline italic">{movie?.tagline?.length ? `"${movie?.tagline}"` : " "}</p>
					<div className="overview">
						<h2 className="text-2xl my-4 mb-2">Overview</h2>
						<p className="">{movie?.overview}</p>
					</div>
					<div className="release-date runtime"></div>
					{movie?.genres ? (
						<p className="my-7 flex flex-wrap gap-2">
							{movie?.genres.map((genre: { id?: number; name?: string }) => (
								<span className="mr-2 border border-gray-200 rounded dark:border-gray-600 px-2 py-1" key={genre?.id}>
									{genre?.name}
								</span>
							))}
						</p>
					) : (
						""
					)}

					<div className="flex gap-4 flex-col details">
						<div className="release-date"></div>

						<div className="ratings flex items-center">
							<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Rating star</title>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<p className="ml-2 text-gray-900 dark:text-white">{movie?.vote_average ? movie?.vote_average : 0}</p>
							<span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
							<span className="text-gray-900 dark:text-white">{movie?.vote_count ? movie?.vote_count : 0} reviews</span>
						</div>

						<div className="status">
							<span className="font-bold">Status: </span>
							{movie?.status} {movie?.release_date} ({movie?.production_countries?.length ? `${movie?.production_countries[0]?.iso_3166_1}` : "–"})
						</div>
						<div className="runtime">
							<p className="">
								<span className="font-bold">Runtime: </span>
								{movie?.runtime} mins.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};
