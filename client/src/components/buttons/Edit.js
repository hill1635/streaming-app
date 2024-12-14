import React from 'react';

function EditBtn(props) {
	return (
		<button
			className="editBtn"
			onClick={props.submit}>
			Edit
		</button>
	);
}

export default EditBtn;
