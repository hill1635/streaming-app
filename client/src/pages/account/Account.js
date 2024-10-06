import React from 'react';
import { useEffect, useState } from 'react';
import EditBtn from '../../components/buttons/Edit';
import SaveBtn from '../../components/buttons/Save';
import CancelBtn from '../../components/buttons/Cancel';
import StreamAPI from '../../utils/StreamAPI';

function Account() {
	const [ edit, setEdit ] = useState(false);
	const [ user, setUser ] = useState({first: "", last: "", email: ""});
	const [ draftUser, setDraftUser ] = useState({first: "", last: "", email: ""});

	useEffect(() => {
		console.log("edit:", edit);
	}, [edit]); 

	const saveAccount = () => {
		setUser(draftUser);
		setEdit(false);
	};

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
					<input type="text" placeholder={user.first} onChange={(e) => setDraftUser({...draftUser, first: e.target.value})}></input>
				}
				<h3>Last:</h3>
				{!edit &&
					<p>{user.last}</p>
				}
				{edit &&
					<input type="text" placeholder={user.last} onChange={(e) => setDraftUser({...draftUser, last: e.target.value})}></input>
				}
				<h3>Email:</h3>
				{!edit &&
					<p>{user.email}</p>
				}
				{edit &&
					<input type="text" placeholder={user.email} onChange={(e) => setDraftUser({...draftUser, email: e.target.value})}></input>
				}
			</div>
			<h3>Services:</h3>
			{!edit &&
				<EditBtn submit={() => setEdit(true)}/>
			}
			{edit &&
			<div>
				<SaveBtn submit={() => saveAccount()}/>
				<CancelBtn submit={() => setEdit(false)}/>
			</div>
			}
		</main>
	);
}

export default Account;
