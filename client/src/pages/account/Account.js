import React, { useEffect, useState, useContext, useRef } from 'react';
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
	const servicesRef = useRef([]);
	const [ services, setServices ] = useState([]);
	const genresRef = useRef([]);
	const [ genres, setGenres ] = useState([]);

  useEffect(() => {
    StreamAPI.getSources().then((res) => {
			console.log("Fetching sources");
			console.log("sources:", res.data);
      servicesRef.current = res.data;
    });

    StreamAPI.getGenres().then((res) => {
			console.log("Fetching genres");
			console.log("genres:", res.data);
      genresRef.current = res.data;
    });

		setUserDraft(user);
  }, []);
	
	return (
		<main>
			<h1>Account Info</h1>
			<div>
				<h2>Personal Info</h2>
				<h3>Display Name:</h3>
				{!edit &&
					<p>{user.displayName}</p>
				}
				{edit &&
					<input type="text" value={userDraft.displayName} onChange={(e) => setUserDraft({...userDraft, first: e.target.value})}></input>
				}
				<h3>Email:</h3>
					<p>{user.email}</p>
			</div>
			<h3>Services:</h3>
			{edit && servicesRef.current.length > 0 &&
				servicesRef.current.map((service) => {
				return (
					<div className="serviceProvider" key={service.id}>
						<input type="checkbox" checked={services.includes(service)}/>
						<img src={service.logo_100px} alt={service.name} />
						<h4>{service.name}</h4>
					</div>
				);
			})}
			{!edit && services.length > 0 && 
				user.services.map((service) => {
				return (
					<div className="service" key={service.id}>
						<img src={service.logo_100px} alt={service.name} />
						<h4>{service.name}</h4>
					</div>
				);
			})}
			<h3>Genres:</h3>
			{edit && genresRef.current.length > 0 &&
				genresRef.current.map((genre) => {
				return (
					<div key={genre.id}>
						<input type="checkbox" checked={genres.includes(genre)}/>
						<h4>{genre.name}</h4>
					</div>
				);
			})}
			{!edit && genres.length > 0 &&
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
				<SaveBtn submit={() => console.log("save")}/>
				<CancelBtn submit={() => setEdit(false)}/>
			</div>
			}
		</main>
	);
}

export default Account;
