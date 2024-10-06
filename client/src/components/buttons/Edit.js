import React from 'react';

function Edit(props) {
	return (
		<button
			className="editBtn"
			onClick={props.submit}>
			Edit
		</button>
	);
}

export default Edit;
