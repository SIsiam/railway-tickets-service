import React from 'react';
import './Home.css';
import Ticket from '../components/Ticket/Ticket';
import Navigation from '../components/nav/Navigation';
import logo from '../Image/images.png';

const Home = () => {
	return (
		<header>
			<Navigation logo={logo} />
			<Ticket />
		</header>
	);
};

export default Home;
