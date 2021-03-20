import React from 'react';
import './Home.css'
import Ticket from '../Ticket/Ticket'; 
import Navigation from '../Navigation/Navigation';
import logo from '../../Image/images.png';

const Home = () => {
	return (
		<section className="Home-section">
			<Navigation logo={logo} />
			<Ticket />
		</section>
	);
};

export default Home;
