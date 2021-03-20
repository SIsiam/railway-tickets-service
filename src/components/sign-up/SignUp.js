import React, { useState } from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import { Link, useHistory } from 'react-router-dom';
import firebaseConfig from '../Firebase/firebase.config';
import Navigation from '../Navigation/Navigation';
// import facebook from '../../Icon/fb.png';
import google from '../../Icon/google.png';
import logo from '../../Image/railway-train-logo-design-inspiration-vector-23431190.jpg';

const SignUp = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	let history = useHistory();
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	});

	const handleInput = (event) => {
		if (event.target.name === 'email') {
			const regularExpression = /\S+@\S+\.\S+/;
			regularExpression.test();
		}
		if (event.target.name === 'password') {
			const regularExpression = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
			regularExpression.test();
		}
		if (event.target.name === 'confirmPass') {
			if (event.target.value !== user.password) {
				document.getElementById('confirmError').innerText = "Password don't match";
				return;
			}
			document.getElementById('confirmError').innerText = '';
		}
		setUser({
			...user,
			[event.target.name]: event.target.value
		});
	};

	const updateUserInfo = (firstName, lastName) => {
		const user = firebase.auth().currentUser;
		user
			.updateProfile({
				displayName: `${firstName} ${lastName}`
			})
			.catch((err) => alert(err.message));
	};



	const formSubmit = (event) => {
		event.preventDefault();
		document.getElementById('error').innerText = '';

		firebase
			.auth()
			.createUserWithEmailAndPassword(user.email, user.password)
			.then((res) => {
				updateUserInfo(user.firstName, user.lastName);
				setUser({ email: user.email, password: user.password });
				history.push('/login');
			})
			.catch((err) => {
				document.getElementById('error').innerText = err.message;
			});
	};
	return (

		<div className="login">
			<div className="container">

				<Navigation logo={logo} />
				<div className="row justify-content-center align-items-center">
					<div className="col-md-5 form-box">
						<h1>Create an Account</h1>
						<form className="mt-4" onSubmit={formSubmit}>
							<div className="form-group col-md-12 mb-2">
								<input
									type="text" className="form-control" name="firstName" value={user.firstName} onChange={handleInput} placeholder="First Name" required />
							</div>
							<div className="form-group col-md-12 mb-2">
								<input
									type="text" className="form-control" name="lastName" value={user.lastName} onChange={handleInput} placeholder="Last Name" required />
							</div>
							<div className="form-group col-md-12 mb-2">
								<input
									type="email" className="form-control" name="email" value={user.email} onChange={handleInput} placeholder="Username or Email" required />
							</div>
							<div className="form-group col-md-12 mb-2">
								<input
									type="password" name="password" value={user.password} onChange={handleInput} className="form-control" placeholder="Password" required
								/>
							</div>
							<div className="form-group col-md-12 mb-2">
								<input
									type="password" name="confirmPass" className="form-control" placeholder="Confirm password" required />
								<h5 className="text-danger mt-2" id="confirmError"> </h5>
							</div>

							<div className="col-md-12 mt-3 mb-4">
								<input className="btn form-control btn-custom" type="submit" value="Create an account" />
							</div>
							<h4 className="text-center mt-3">
								Already have an account ? <Link to="/login">Log In</Link>
							</h4>
						</form>
					</div>

					<div className="col-md-8 text-center mt-3">
						<p className="text-danger mt-2" id="error" />
						{/* <div>
							<button className="btn btn-social" disabled>
								<img className="social-logo" src={facebook} alt="fb" /> Login with Facebook
						</button>
						</div> */}
						<div className="mt-3">
							<button className="btn btn-social" disabled>
								<img className="social-logo" src={google} alt="google" /> Login with Google
						</button>
						</div>
					</div>
				</div>
			</div>

		</div>

	);
};

export default SignUp;
