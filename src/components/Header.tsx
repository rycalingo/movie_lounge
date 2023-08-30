import { SyntheticEvent, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo_icon from "../static/logo_icon.png";

import { ModeSwitch } from "./ModeSwitch";

import { pages } from "../content/pages";
import { Page } from "../models/page";

export const Header = () => {
	const [isHidden, setHidden] = useState<boolean>(true);
	const navigate = useNavigate();

	const activeNav = "text-base block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 active";
	const inactiveNav = "text-base block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		const target = event.target as typeof event.target & {
			search: { value: string };
		};
		const searchTerm = target.search.value;
		target.search.value = "";
		return navigate(`/search?q=${searchTerm}`);
	};

	const navBar = pages?.map((item: Page, i: number) => {
		return (
			<li key={i}>
				<NavLink to={item.path} className={({ isActive }) => (isActive ? activeNav : inactiveNav)} end>
					{item.title}
				</NavLink>
			</li>
		);
	});

	return (
		<header>
			<nav className="bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<Link to="/" className="flex items-center">
						<img src={logo_icon} className="h-8 mr-3" alt="Movie Lounge Logo" title="Icon by icon_small - https://www.freepik.com/search?format=search&last_filter=type&last_value=icon&query=film%20reel%20logo&selection=1&type=icon" />
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Movie Lounge</span>
					</Link>
					<div id="mobile-menu" className="flex md:order-2">
						<ModeSwitch />
						<button
							onClick={() => setHidden(!isHidden)}
							type="button"
							data-collapse-toggle="navbar-search"
							aria-controls="navbar-search"
							aria-expanded="false"
							className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
						>
							<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
							</svg>
							<span className="sr-only">Search</span>
						</button>
						<div className="hidden relative md:block">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
								</svg>
								<span className="sr-only">Search icon</span>
							</div>
							<form onSubmit={handleSubmit}>
								<input
									type="text"
									id="search-navbar-m"
									name="search"
									className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Search..."
								/>
							</form>
						</div>
						<button
							onClick={() => setHidden(!isHidden)}
							data-collapse-toggle="navbar-search"
							type="button"
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-search"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
							</svg>
						</button>
					</div>
					<div id="navbar-search" className={`${isHidden ? "hidden" : " "} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
						<div className="relative mt-3 md:hidden">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
								</svg>
							</div>
							<form onSubmit={handleSubmit}>
								<input
									type="text"
									id="search-navbar-d"
									name="search"
									className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Search..."
									autoComplete="off"
								/>
							</form>
						</div>
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">{navBar}</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};
