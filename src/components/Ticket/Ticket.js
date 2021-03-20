import './Ticket.css';
import Card from './Card';
import data from '../../FakeData/FakeData';
import { useEffect, useState } from 'react';


const Slider = () => {

	const [Ticket, setTicket] = useState([]);

	useEffect(() => {
		setTicket(data)
	}, [])


	return (
		<div className="container hero-box">


			<div className="col-lg-12 px-5">
				<div className="slider-wrapper row">
					{data.map((property) => <Card key={property.id} properties={property} />)}
				</div>
			</div>
		</div>
	);
};

export default Slider;