import React from 'react';
import './Header.scss';
import Navigation from '../components/navigation/Navigation';
import SearchBar from '../components/search/SearchBar';

function Header() {
	return (
		<header>
			<img
				alt="Logo"
				src="#"
			/>
			<SearchBar />
			<Navigation />
		</header>
	);
}

export default Header;
