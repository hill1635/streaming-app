import React from 'react';

function CancelBtn(props) {
	return (
		<button
			className="cancelBtn"
			onClick={props.submit}
		>
			Cancel
		</button>
	);
}

export default CancelBtn;
