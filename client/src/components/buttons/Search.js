import React from 'react';
import API from '../../utils/UserAPI';

function Search(props) {
	var search = (e) => {
		e.preventDefault();
		console.log('submit: ', props.search);
	};

	return (
		<button
			className="searchBtn"
			type="submit"
			onClick={(e) => search(e)}>
			Search
		</button>
	);
}

export default Search;
