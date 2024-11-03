import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import './Home.scss';

function Home() {
	const { user } = useContext(UserContext);

	return (
		<main>
			<div className="wrapper">
				<h1>Welcome to the homepage!</h1>
				<p>Get started here to for the first impression.</p>
			</div>
		</main>
	);
}

export default Home;
