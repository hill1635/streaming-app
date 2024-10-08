import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Setup from './pages/setup/Setup';
import Account from './pages/account/Account';
import About from './pages/about/About';
import Footer from './footer/Footer';
import API from './utils/UserAPI';

import './App.scss';
import './components/buttons/Buttons.scss';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [userId, setUserId] = useState("");

	useEffect(() => {
		API.checkSession().then((res) => {
			if (res.data.session !== undefined) {
				setUserId(res.data.session.userId);
				setLoggedIn(true);
			}
		});
	}, []);

	return (
		<Router>
			<div className="background">
				<Header loggedIn={loggedIn} />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home user={userId} />}
					/>
					<Route
						exact
						path="/login"
						element={<Login setUser={setUserId}/>}
					/>
					<Route
						exact
						path="/signup"
						element={<SignUp />}
					/>
					<Route
						exact
						path="/setup"
						element={<Setup />}
					/>
					<Route
						exact
						path="/account"
						element={<Account user={userId}/>}
					/>
					<Route
						exact
						path="/about"
						element={<About />}
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
