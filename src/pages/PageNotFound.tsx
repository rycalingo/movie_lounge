import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

import pagenotfound from "../static/images/pagenotfound.png";

export const PageNotFound = () => {
	useEffect(() => {
		document.title = `Page Not Found - Movie Lounge`;
	});

	return (
		<main>
			<section className="flex flex-col justify-center px-2">
				<div className="flex flex-col items-center my-4">
					<p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
					<div className="max-w-lg">
						<img className="round" src={pagenotfound} alt="4040 Page Not Found" />
					</div>
				</div>
				<div className="flex justify-center my-4">
					<Link to="/">
						<Button>Back To Movie Lounge</Button>
					</Link>
				</div>
			</section>
		</main>
	);
};
