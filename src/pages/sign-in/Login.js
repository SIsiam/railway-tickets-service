import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import { UserContext } from '../../App';
import './login.css';
import Navigation from '../../components/nav/Navigation';
import { Link, useHistory, useLocation } from 'react-router-dom';
import facebook from '../../Icon/fb.png';
import google from '../../Icon/google.png';
import firebaseConfig from '../../components/firebase/firebase.config';
import Loginlogo from '../../Image/railway-train-logo-design-inspiration-vector-23431190.jpg';


if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}
const Login = () => {
	const [loggedIn, setLoggedIn] = useContext(UserContext);
	const [bookingInfo, setBookingInfo] = useContext(UserContext);

	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	let history = useHistory();
	let location = useLocation();

	// const { from } = location.state || { from: { pathname: `hotels/${bookingInfo.slug}` } };
	const { from } = location.state || { from: { pathname: `hotels/${bookingInfo}` } };
	let provider = new firebase.auth.GoogleAuthProvider();
	let fb = new firebase.auth.FacebookAuthProvider();
	const handleEmailPass = (e) => {
		if (e.target.name === 'email') {
			const regex = /\S+@\S+\.\S+/;
			regex.test();
		}
		if (e.target.name === 'password') {
			const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
			regex.test();
		}
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
		setLoggedIn({
			...loggedIn,
			[e.target.name]: e.target.value
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		if (!user.email && !user.password) {
			document.getElementById('error').innerText = 'Enter all vales correctly';
			return;
		}
		firebase
			.auth()
			.signInWithEmailAndPassword(user.email, user.password)
			.then((result) => {
				setLoggedIn({
					email: user.email,
					password: user.password
				});
				history.replace(from);
			})
			.catch((error) => {
				document.getElementById('error').innerText = error.message;
			});
	};

	const googleSign = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function (result) {
				var user = result.user;
				setUser({
					email: user.email,
					name: user.displayName
				});
				setLoggedIn({
					email: user.email,
					name: user.displayName
				});
				history.push(`hotels/${bookingInfo.slug}`);
			})
			.catch(function (error) {
				console.error(error.message);
			});
	};

	const fbLogIn = () => {
		firebase
			.auth()
			.signInWithPopup(fb)
			.then(function (result) {
				var user = result.user;
				setUser({
					email: user.email,
					name: user.displayName
				});
				setLoggedIn({
					email: user.email,
					name: user.displayName
				});
				history.push(`hotels/${bookingInfo.slug}`);
			})
			.catch(function (error) {
				console.error(error.message);
			});
	};

	return (
		<div className="container login">
			<Navigation logo={Loginlogo} />
			<div className="row justify-content-center align-items-center">
				<div className="col-md-5 form-box">
					<h1>Login</h1>
					<form className="mt-4" onSubmit={formSubmit}>
						<div className="form-group col-md-12">
							<label htmlFor="email">Email address</label>
							<input
								type="email"
								className="form-control"
								name="email"
								value={user.email}
								onChange={handleEmailPass}
								placeholder="Username or Email"
								required
							/>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								className="form-control"
								placeholder="password"
								value={user.password}
								onChange={handleEmailPass}
								required
							/>
						</div>
						<div className="form-group form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label" htmlFor="check">
								Remember Me
							</label>
							<Link to="/forgotPassword">Forgot Password?</Link>
						</div>

						<div className="col-md-12 mt-3 mb-4">
							<input className="btn form-control btn-custom" type="submit" value="Log In" />
						</div>
						<p className="text-center mt-3">
							Don't Have Account?
							<Link to="/signup">Create an Account.</Link>
						</p>
					</form>
				</div>
				<div className="col-md-8 text-center">
					<p className="text-danger mt-3" id="error" />
					<div>
						<button className="btn btn-social" onClick={fbLogIn}>
							<img className="social-logo" src={facebook} alt="fb" />
							Continue with Facebook
						</button>
					</div>
					<div className="mt-3">
						<button className="btn btn-social" onClick={googleSign}>
							<img className="social-logo" src={google} alt="google" />
							Continue with Google
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
