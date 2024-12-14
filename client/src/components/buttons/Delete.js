import React from 'react';

function DeleteBtn(props) {
	return (
		<button
			className="deleteBtn"
			onClick={props.delete}>
			Delete
		</button>
	);
}

export default DeleteBtn;
