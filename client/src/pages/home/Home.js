import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { StreamContext } from '../../context/StreamContext';
import './Home.scss';
import { streamFilters } from '../../utils/StreamFilters';
import StreamAPI from '../../utils/StreamAPI';

function Home() {
	const { user } = useContext(UserContext);
	const { sources, genres } = useContext(StreamContext);
	const [ filters, setFilters ] = useState([]);

	const getTitles = (params) => {
		const serviceIds = params.services.map((service) => service.id).join(",");
		const genreIds = params.genres.map((genre) => genre.id).join(",");
		const searchParams = {
			services: serviceIds,
			genres: genreIds,
		};
		StreamAPI.getTitles(searchParams)
			.then((res) => {
				console.log("res:", res);
			})
			.catch((err) => {
				console.error("Error fetching titles:", err);
			});
	};

	const initFilters = () => {
		const updatedFilters = streamFilters.map(filter => {
			if (filter.key === "source_ids") {
				return { ...filter, values: sources };
			} else if (filter.key === "genres") {
				return { ...filter, values: genres };
			}
			return filter;
		});
		setFilters(updatedFilters);
	};
	
	useEffect(() => {
		initFilters();
	}, [ sources, genres ]);

	return (
		<main>
			<div className="wrapper">
				<h1>Welcome to the homepage!</h1>
				<p>Get started here to for the first impression.</p>
				<button onClick={() => getTitles({...user})}>Get Titles</button>
			</div>
		</main>
	);
}

export default Home;
