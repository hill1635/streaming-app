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
			<div>
				<h2>Personal Info</h2>
				<h3>First:</h3>
				{!edit &&
					<p>Value</p>
				}
				{edit &&
					<input type="text" placeholder="Value"></input>
				}
				<h3>Last:</h3>
				{!edit &&
					<p>Value</p>
				}
				{edit &&
					<input type="text" placeholder="Value"></input>
				}
				<h3>Email:</h3>
				{!edit &&
					<p>Value</p>
				}
				{edit &&
					<input type="text" placeholder="Value"></input>
				}
			</div>
			<h3>Services:</h3>
			{!edit &&
				<EditBtn submit={() => setEdit(true)}/>
			}
			{edit &&
			<div>
				<SaveBtn submit={() => setEdit(false)}/>
				<CancelBtn submit={() => setEdit(false)}/>
			</div>
			}
		</main>
	);
}

export default Account;
