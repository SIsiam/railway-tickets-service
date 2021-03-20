import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home';
import TicketConfirm from './components/TicketConfirm/TicketConfirm';
import Login from './components/sign-in/Login';
import SignUp from './components/sign-up/SignUp';

export const UserContext = createContext();

const App = () => {
	const [loggedIn, setLoggedIn] = useState({});
	const [bookingInfo, setBookingInfo] = useState({});
	return (
		<UserContext.Provider value={[bookingInfo, setBookingInfo, loggedIn, setLoggedIn]}>
			<Router>
				<Switch>
					<Route exact={true} path="/">
						<Home></Home>
					</Route>

					<Route exact path="/login">
						<Login></Login>
					</Route>

					<Route exact path="/signup">
						<SignUp></SignUp>
					</Route>

					<Route exact path="/:url">
						<Booking></Booking>
					</Route>

					<PrivateRoute path="/tickets/:url">
						<TicketConfirm></TicketConfirm>
					</PrivateRoute>

				</Switch>
			</Router>
		</UserContext.Provider>
	);
};

export default App;
