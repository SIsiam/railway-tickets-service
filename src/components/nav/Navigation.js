import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import 'firebase/auth';
import { UserContext } from '../../App';
import './nav.css';
import firebaseConfig from '../firebase/firebase.config';

const Navigation = ({ logo }) => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}

	const [loggedIn, setLoggedIn] = useContext(UserContext);
	const handleSignOut = () => {
		firebase
			.auth()
			.signOut()
			.then(function (res) {
				setLoggedIn({});
			})
			.catch(function (error) {
				console.log(error.message);
			});
	};
	return (
		<nav className="container py-2">
			<div className="row justify-content-between align-items-center">
				<div className="col-lg-2">
					<Link to="/">
						<img src={logo} alt="logo" className="img-fluid logo" />
					</Link>
				</div>

				<div className="col-lg-5">
					<ul className="navbar">
						<li>
							<a href="#/">Home</a>
						</li>
						<li>
							<a href="#/">Destination</a>
						</li>
						<li>
							<a href="#/">Blog</a>
						</li>
						<li>
							<a href="#/">Contact</a>
						</li>
						<li>
							{loggedIn.email ? (
								<Link to="/" onClick={handleSignOut}>
									{loggedIn.email}
								</Link>
							) : (
								<Link to="/login">Login</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;

