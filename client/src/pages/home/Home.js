import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { StreamContext } from '../../context/StreamContext';
import './Home.scss';
import { streamFilters } from '../../utils/StreamFilters';
import Carousel from '../../components/carousel/Carousel';

function Home() {
	const { user } = useContext(UserContext);
	const { sources, genres, getTitles, getTitle, getTitleDetails } = useContext(StreamContext);
	const [ filters, setFilters ] = useState([]);

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
				<Carousel getDataArray={getTitles} getIndex={getTitle} getDetails={getTitleDetails} filters={filters} />
				<button onClick={() => getTitles({...user})}>Get Titles</button>
			</div>
		</main>
	);
}

export default Home;
