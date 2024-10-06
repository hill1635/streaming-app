import React from 'react';
import { useEffect, useState } from 'react';
import EditBtn from '../../components/buttons/Edit';
import SaveBtn from '../../components/buttons/Save';
import CancelBtn from '../../components/buttons/Cancel';
import StreamAPI from '../../utils/StreamAPI';

function Account() {
	const [ edit, setEdit ] = useState(false);
	const [ user, setUser ] = useState({first: "", last: "", email: ""});

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
					<p>{user.first}</p>
				}
				{edit &&
					<input type="text" placeholder={user.first}></input>
				}
				<h3>Last:</h3>
				{!edit &&
					<p>{user.last}</p>
				}
				{edit &&
					<input type="text" placeholder={user.last}></input>
				}
				<h3>Email:</h3>
				{!edit &&
					<p>{user.email}</p>
				}
				{edit &&
					<input type="text" placeholder={user.email}></input>
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
