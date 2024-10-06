import React from 'react';
import { useEffect, useState } from 'react';
import EditBtn from '../../components/buttons/Edit';
import SaveBtn from '../../components/buttons/Save';
import CancelBtn from '../../components/buttons/Cancel';
import StreamAPI from '../../utils/StreamAPI';

function Account() {
	const [ edit, setEdit ] = useState(false);

	useEffect(() => {
		console.log("edit:", edit);
	}, [edit]); 

	return (
		<main>
			<h1>Account Info</h1>
			<p>First:</p>
			<p>Last:</p>
			<p>Email:</p>
			<p>Services:</p>
			<EditBtn submit={() => setEdit(!edit)}/>
			<SaveBtn />
			<CancelBtn />
		</main>
	);
}

export default Account;
