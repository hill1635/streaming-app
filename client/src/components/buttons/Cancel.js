import React from 'react';

function Cancel(props) {
	return (
		<button
			className="cancelBtn"
			onClick={props.submit}
		>
			Cancel
		</button>
	);
}

export default Cancel;
