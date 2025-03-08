import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { StreamContext } from '../../context/StreamContext';
import { EditBtn, CancelBtn, SaveBtn } from '../../components/buttons';
import './Account.scss';

function Account() {
  const [edit, setEdit] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { sources, genres } = useContext(StreamContext);
  const [userDraft, setUserDraft] = useState({ ...user });

  useEffect(() => {
    setUserDraft({ ...user });
    console.log('user:', user);
  }, [user]);
  useEffect(() => {
    console.log('userDraft:', userDraft);
  }, [userDraft]);

  const addOption = (option, property) => {
    var newUserDraft = userDraft;
    newUserDraft[property].push(option);
    setUserDraft({ ...newUserDraft });
  };

  const removeOption = (option, property) => {
    var newUserDraft = userDraft;
    newUserDraft[property] = newUserDraft[property].filter(
      (index) => index !== option
    );
    setUserDraft({ ...newUserDraft });
  };

  const toggleOption = (e, option, property) => {
    if (property === 'genres' && e === 'like') {
      addOption(option, property);
      removeOption(option, property);
      return;
    } else if (property === 'genres' && e === 'dislike') {
      addOption(option, property);
      removeOption(option, property);
      return;
    }

    if (e.target.checked) {
      addOption(option, property);
      return;
    } else {
      removeOption(option, property);
      return;
    }
  };

  const togglePreference = (preference, value, property) => {
    var newUserDraft = userDraft;
    if (preference === 'likes') {
      const newUserDraftProp = newUserDraft[property]['likes'];
      newUserDraftProp.push(value);
      const oldUserDraftProp = newUserDraft[property]['dislikes'];
      newUserDraft[property]['dislikes'] = oldUserDraftProp.filter((item) => item !== value);
    } else if (preference === 'dislikes') {
      const newUserDraftProp = newUserDraft[property]['dislikes'];
      newUserDraftProp.push(value);
      const oldUserDraftProp = newUserDraft[property]['likes'];
      newUserDraft[property]['likes'] = oldUserDraftProp.filter((item) => item !== value);
    }
    setUserDraft({ ...newUserDraft });
  };

  const saveUser = (data) => {
    setUser({ ...data });
    setEdit(false);
  };

  // TODO: Checked variable not working
  return (
    <main>
      <h1>Account Info</h1>
      <div>
        <h2>Personal Info</h2>
        <h3>Display Name:</h3>
        {!edit && <p>{user.displayName}</p>}
        {edit && (
          <input
            type="text"
            value={userDraft.displayName}
            onChange={(e) =>
              setUserDraft({ ...userDraft, first: e.target.value })
            }
          ></input>
        )}
        <h3>Email:</h3>
        <p>{user.email}</p>
      </div>
      <section className="servicesSection">
        <div className="servicesHeader">
          <h3>Services:</h3>
        </div>
        <div className="serviceOptions">
          {edit &&
            sources?.length > 0 &&
            sources.map((service) => {
              return (
                <div className="serviceProvider" key={service.id}>
                  <input
                    type="checkbox"
                    checked={userDraft.services.includes(service.id)}
                    onChange={(e) => toggleOption(e, service.id, 'services')}
                  />
                  <img src={service.logo_100px} alt={service.name} />
                  <h4>{service.name}</h4>
                </div>
              );
            })}
          {!edit &&
            userDraft.services?.length > 0 &&
            sources
              .filter((source) => userDraft.services.includes(source.id))
              .map((service) => {
                return (
                  <div className="service" key={service.id}>
                    <img src={service.logo_100px} alt={service.name} />
                  </div>
                );
              })}
        </div>
      </section>
      <section className="genresSection">
        <div className="genresHeader">
          <h3>Genres:</h3>
        </div>
        <div className="genreOptions">
          {edit &&
            genres?.length > 0 &&
            genres.map((genre) => {
              return (
                <div key={genre.id}>
                  <button 
                    className={userDraft.genres.likes.includes(genre.id) ? "selected" : "unselected"}
                    onClick={() => togglePreference('likes', genre.id, 'genres')}>
                    &#10003;
                  </button>
                  <button className={userDraft.genres.dislikes.includes(genre.id) ? "selected" : "unselected"}
                    onClick={(e) => togglePreference('dislikes', genre.id, 'genres')}>
                    X
                  </button>
                  <h4>{genre.name}</h4>
                </div>
              );
            })}
          <h4>Likes:</h4>
          {!edit &&
            userDraft.genres.likes?.length > 0 &&
            <div className="genreOptions">
              {genres
                .filter((genre) => userDraft.genres.likes.includes(genre.id))
                .map((genre) => {
                  return (
                    <div className="genre" key={genre.id}>
                      <h4>{genre.name}</h4>
                    </div>
                  );
                })}
            </div>
          }
          <h4>Dislikes:</h4>
          {!edit &&
            userDraft.genres.dislikes?.length > 0 &&
            <div className="genreOptions">
              {genres
                .filter((genre) => userDraft.genres.likes.includes(genre.id))
                .map((genre) => {
                  return (
                    <div className="genre" key={genre.id}>
                      <h4>{genre.name}</h4>
                    </div>
                  );
                })}
            </div>
          }
        </div>
      </section>
      {!edit && <EditBtn submit={() => setEdit(true)} />}
      {edit && (
        <div>
          <SaveBtn submit={() => saveUser(userDraft)} />
          <CancelBtn submit={() => setEdit(false)} />
        </div>
      )}
    </main>
  );
}

export default Account;
