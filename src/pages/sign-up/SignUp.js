import React, { useState } from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import { Link, useHistory } from 'react-router-dom';
import firebaseConfig from '../../components/firebase/firebase.config';
import Navigation from '../../components/nav/Navigation';
import facebook from '../../Icon/fb.png';
import google from '../../Icon/google.png';
import logo from '../../Image/railway-train-logo-design-inspiration-vector-23431190.jpg';

const SignUp = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	let history = useHistory();
	const [ user, setUser ] = useState({
		firstName : '',
		lastName  : '',
		email     : '',
		password  : ''
	});

	const handleInput = (e) => {
		if (e.target.name === 'email') {
			const rex = /\S+@\S+\.\S+/;
			rex.test();
		}
		if (e.target.name === 'password') {
			const rex = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
			rex.test();
		}
		if (e.target.name === 'confirmPass') {
			if (e.target.value !== user.password) {
				document.getElementById('confirmError').innerText = "Password don't match";
				return;
			}
			document.getElementById('confirmError').innerText = '';
		}
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const updateUserInfo = (firstName, lastName) => {
		const user = firebase.auth().currentUser;
		user
			.updateProfile({
				displayName : `${firstName} ${lastName}`
			})
			.catch((err) => alert(err.message));
	};

	const sendVerifyMail = () => {
		const user = firebase.auth().currentUser;
		user.sendEmailVerification().catch((err) => {
			alert(err.message);
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		document.getElementById('error').innerText = '';

		firebase
			.auth()
			.createUserWithEmailAndPassword(user.email, user.password)
			.then((res) => {
				updateUserInfo(user.firstName, user.lastName);
				sendVerifyMail();
				setUser({ email: user.email, password: user.password });
				history.push('/login');
			})
			.catch((err) => {
				document.getElementById('error').innerText = err.message;
			});
	};
	return (
		<div className="container login">
			<Navigation logo={logo} />
			<div className="row justify-content-center align-items-center">
				<div className="col-md-5 form-box">
					<h1>Create an Account</h1>
					<form className="mt-4" onSubmit={formSubmit}>
						<div className="form-group col-md-12">
							<input
								type="text"
								className="form-control"
								name="firstName"
								value={user.firstName}
								onChange={handleInput}
								placeholder="first Name"
								required
							/>
						</div>
						<div className="form-group col-md-12">
							<input
								type="text"
								className="form-control"
								name="lastName"
								value={user.lastName}
								onChange={handleInput}
								placeholder="Last Name"
								required
							/>
						</div>
						<div className="form-group col-md-12">
							<input
								type="email"
								className="form-control"
								name="email"
								value={user.email}
								onChange={handleInput}
								placeholder="Username or Email"
								required
							/>
						</div>
						<div className="form-group col-md-12">
							<input
								type="password"
								name="password"
								value={user.password}
								onChange={handleInput}
								className="form-control"
								placeholder="password"
								required
							/>
						</div>
						<div className="form-group col-md-12">
							<input
								type="password"
								name="confirmPass"
								className="form-control"
								placeholder="password"
								required
							/>
							<p className="text-danger mt-2" id="confirmError" />
						</div>

						<div className="col-md-12 mt-3 mb-4">
							<input className="btn form-control btn-custom" type="submit" value="Create an account" />
						</div>
						<p className="text-center mt-3">
							Already have an account?
							<Link to="/login">Log In</Link>
						</p>
					</form>
				</div>

				<div className="col-md-8 text-center mt-3">
					<p className="text-danger mt-2" id="error" />
					<div>
						<button className="btn btn-social" disabled>
							<img className="social-logo" src={facebook} alt="fb" />
							Continue with Facebook
						</button>
					</div>
					<div className="mt-3">
						<button className="btn btn-social" disabled>
							<img className="social-logo" src={google} alt="google" />
							Continue with Google
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
