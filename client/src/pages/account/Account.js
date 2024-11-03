import React, { useEffect, useState, useContext, useRef } from 'react';
import { UserContext } from '../../UserContext';
import EditBtn from '../../components/buttons/Edit';
import SaveBtn from '../../components/buttons/Save';
import CancelBtn from '../../components/buttons/Cancel';
import StreamAPI from '../../utils/StreamAPI';
import './Account.scss';

function Account() {
	const [ edit, setEdit ] = useState(false);
	const { user, setUser } = useContext(UserContext);
	const [ userDraft, setUserDraft ] = useState({...user});
	const servicesRef = useRef([]);
	const genresRef = useRef([]);

  useEffect(() => {
    StreamAPI.getSources().then((res) => {
			console.log("sources:", res.data);
      servicesRef.current = res.data;
    });

    StreamAPI.getGenres().then((res) => {
			console.log("Fetching genres");
			console.log("genres:", res.data);
      genresRef.current = res.data;
    });
  }, []);

	useEffect(() => {
		setUserDraft({...user});
	}, [user]);

	const addOption = (option, property) => {
		var newUserDraft = userDraft;
		newUserDraft[property].push(option);
		setUserDraft({...newUserDraft});
	};

	const removeOption = (option, property) => {
		var newUserDraft = userDraft;
		newUserDraft[property] = newUserDraft[property].filter((index) => index !== option);
		setUserDraft({...newUserDraft});
	};

	const toggleOption = (e, option, property) => {
		if (e.target.checked) {
			addOption(option, property);
		} else {
			removeOption(option, property);
		}
	};

	const saveUser = (data) => {
		setUser({...data});
		setEdit(false);
	};
	
	// TODO: Checked variable not working
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
						<input type="checkbox" checked={userDraft.services.includes(service)} onChange={(e) => toggleOption(e, service, "services")} />
						<img src={service.logo_100px} alt={service.name} />
						<h4>{service.name}</h4>
					</div>
				);
			})}
			{!edit && userDraft.services.length > 0 && 
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
						<input type="checkbox" checked={userDraft.genres.includes(genre)} onChange={(e) => toggleOption(e, genre, "genres")}/>
						<h4>{genre.name}</h4>
					</div>
				);
			})}
			{!edit && userDraft.genres.length > 0 &&
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
				<SaveBtn submit={() => saveUser(userDraft)}/>
				<CancelBtn submit={() => setEdit(false)}/>
			</div>
			}
		</main>
	);
}

export default Account;
