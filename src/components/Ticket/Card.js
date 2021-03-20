import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
	const { TicketName, id, url, price } = props.properties;
	return (
		<div id={`card-${id}`} className="card-box col-lg-3">

			<div className="my-card">
				<div className="my-card-body">
					<h2>{TicketName}</h2>
					<Link className="my-link" to={`/${url}`}>
						<button className="btn btn-outline-light">BUY NOW </button>
					</Link>
				</div>
				<hr />
				<div className="ticket-price">
					<h4> ${price} </h4>
				</div>
			</div>
		</div>
	);
};

export default Card;
