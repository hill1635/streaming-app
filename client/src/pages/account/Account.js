import React from 'react';
import { useEffect, useState } from 'react';
import EditBtn from '../../components/buttons/Edit';
import SaveBtn from '../../components/buttons/Save';
import CancelBtn from '../../components/buttons/Cancel';
import UserAPI from '../../utils/UserAPI';
import StreamAPI from '../../utils/StreamAPI';
import './Account.scss';

function Account(props) {
	const [ edit, setEdit ] = useState(false);
	const [ user, setUser ] = useState({display: "", email: "", services: [], genres: []});
	const [ userDraft, setUserDraft ] = useState(user);
	const [ genres, setGenres ] = useState([]);
	const [ services, setServices ] = useState([]);

	const getUserData = () => {
		UserAPI.get().then((res) => {
			setUser(res.data);
		});
	};

	const updateUser = (userData) => {
		UserAPI.update(userData).then((res) => {
			setUser(userData);
			setEdit(false);
		});
	};

	useEffect(() => {
		console.log("props.user: ", props.user);
		if (props.user._id !== undefined) {
			StreamAPI.getSources().then((res) => {
				var filteredSources = res.data.filter((source) => source.regions.includes("US")).slice(0, 10);
				setServices(filteredSources);
			});

			StreamAPI.getGenres().then((res) => {
				setGenres(res.data);
			});
		} else {
			window.location.href = '/login';
		}
	}, []); 

	const selectGenre = (selected, genre) => {
		if (selected) {
			setUserDraft({...userDraft, genres: [...userDraft.genres, genre]});
		} else {
			var index = userDraft.genres.indexOf(genre);
			var newArray = userDraft.genres.splice(index, 1);
			setUserDraft({...userDraft, genres: newArray});
		}
	};

	const selectService = (selected, service) => {
		if (selected) {
			setUserDraft({...userDraft, services: [...userDraft.services, service]});
		} else {
			var index = userDraft.genres.indexOf(service);
			var newArray = userDraft.services.splice(index, 1);
			setUserDraft({...userDraft, services: newArray});
		}
	};
	
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
				{!edit &&
					<p>{user.email}</p>
				}
				{edit &&
					<input type="text" value={userDraft.email} onChange={(e) => setUserDraft({...userDraft, email: e.target.value})}></input>
				}
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
