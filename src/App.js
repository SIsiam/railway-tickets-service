import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Booking from './pages/Booking';
// import Password from './pages/forgotPassword/Password';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
// import NotFound from './pages/NotFound';
import Login from './pages/sign-in/Login';
import SignUp from './pages/sign-up/SignUp';

export const UserContext = createContext();

const App = () => {
	const [loggedIn, setLoggedIn] = useState({});
	const [bookingInfo, setBookingInfo] = useState({});
	return (
		<UserContext.Provider value={[bookingInfo, setBookingInfo, loggedIn, setLoggedIn]}>
			<Router>
				<Switch>
					<Route exact={true} path="/">
						<Home />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/signup">
						<SignUp />
					</Route>
					{/* <Route path="/forgotPassword">
						<Password />
					</Route> */}
					<Route exact path="/:slug">
						<Booking />
					</Route>
					<PrivateRoute path="/hotels/:slug">
						<Hotels />
					</PrivateRoute>
					{/* <Route path="*">
						<NotFound />
					</Route> */}
				</Switch>
			</Router>
		</UserContext.Provider>
	);
};

export default App;
