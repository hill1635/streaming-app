import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../UserContext';
import EditBtn from '../../components/buttons/Edit';
import SaveBtn from '../../components/buttons/Save';
import CancelBtn from '../../components/buttons/Cancel';
import UserAPI from '../../utils/UserAPI';
import StreamAPI from '../../utils/StreamAPI';
import './Account.scss';

function Account(props) {
	const [ edit, setEdit ] = useState(false);
	const { user, setUser } = useContext(UserContext);
	const [ userDraft, setUserDraft ] = useState(user);
	const [ genres, setGenres ] = useState([]);
	const [ services, setServices ] = useState([]);

			// StreamAPI.getSources().then((res) => {
			// 	var filteredSources = res.data.filter((source) => source.regions.includes("US")).slice(0, 10);
			// 	setServices(filteredSources);
			// });

			// StreamAPI.getGenres().then((res) => {
			// 	setGenres(res.data);
			// });
	
	return (
		<main>
			<h1>Account Info</h1>
			<div>
				<h2>Personal Info</h2>
				<h3>Display Name:</h3>
				{!edit &&
					<p>{user.display}</p>
				}
				{edit &&
					<input type="text" value={userDraft.display} onChange={(e) => setUserDraft({...userDraft, first: e.target.value})}></input>
				}
				<h3>Email:</h3>
					<p>{user.email}</p>
			</div>
			<h3>Services:</h3>
			{edit &&
				services.map((service) => {
				return (
					<div className="serviceProvider" key={service.id}>
						<input type="checkbox" onChange={(e) => selectService(e.target.checked, service)}/>
						<img src={service.logo_100px} alt={service.name} />
						<h4>{service.name}</h4>
					</div>
				);
			})}
			{!edit && 
				user.services.map((service) => {
				return (
					<div className="service" key={service.id}>
						<img src={service.logo_100px} alt={service.name} />
						<h4>{service.name}</h4>
					</div>
				);
			})}
			<h3>Genres:</h3>
			{edit &&
				genres.map((genre) => {
				return (
					<div key={genre.id}>
						<input type="checkbox" onChange={(e) => selectGenre(e.target.checked, genre)}/>
						<h4>{genre.name}</h4>
					</div>
				);
			})}
			{!edit &&
				user.genres.map((genre) => {
				return (
					<div key={genre.id}>
						<h4>{genre.name}</h4>
					</div>
				);
			})}
			{!edit &&
				<EditBtn submit={() => setEdit(true)}/>
			}
			{edit &&
			<div>
				<SaveBtn submit={() => updateUser(userDraft)}/>
				<CancelBtn submit={() => setEdit(false)}/>
			</div>
			}
		</main>
	);
}

export default Account;
