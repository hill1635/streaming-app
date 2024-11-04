import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Setup from './pages/setup/Setup';
import Account from './pages/account/Account';
import About from './pages/about/About';
import Footer from './footer/Footer';
import { UserProvider } from "./context/UserContext";
import { StreamProvider } from "./context/StreamContext";


import './App.scss';
import './components/buttons/Buttons.scss';

function App() {

	return (
		<UserProvider>
			<StreamProvider>
				<Router>
					<div className="background">
						<Header />
						<Routes>
							<Route
								exact
								path="/"
								element={<Home />}
							/>
							<Route
								exact
								path="/login"
								element={<Login />}
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
								element={<Account />}
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
			</StreamProvider>
		</UserProvider>
	);
}

export default App;
