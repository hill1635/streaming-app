import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import './Navigation.scss';

function Navigation() {
	const { user } = useContext(UserContext);
	const [ loggedIn, setLoggedIn ] = useState(false);

	useEffect(() => {
		setLoggedIn(Object.keys(user).length > 0);
	}, [user]);

	return (
	  <nav className="nav" role="navigation">
	    <a href="/">Home</a>
			{!loggedIn &&
				<span>
					<a href="/login">Login</a>
					<a href="/signup">Signup</a>
				</span>
			}
			{loggedIn &&
				<span>
					<a href="/account">Account</a>
					<a href="/">Logout</a>
				</span>
			}
	  </nav>
	);
}

export default Navigation;
