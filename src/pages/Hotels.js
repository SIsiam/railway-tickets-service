import React, { useContext, useEffect, useState } from 'react';
import './TicketDetails.css';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';
import fakeData from '../fakeData/FakeData';
import LastLogo from '../Image/images.png';
import Navigation from '../components/nav/Navigation';
import TicketImg from "../Image/tickets 3.png";

const Hotels = () => {
	let { slug } = useParams();
	const [placeHotels, setPlaceHotels] = useState([]);
	useEffect(() => {
		const filterHotels = fakeData.filter((hotel) => hotel.slug === slug);
		console.log(filterHotels);
		const { hotels } = filterHotels;
		setPlaceHotels(hotels);
		console.log(hotels);
	},
		[slug]
	);

	const [bookingInfo, setBookingInfo] = useContext(UserContext);
	const { origin, destination } = bookingInfo;
	console.log(bookingInfo.destination);
	console.log(bookingInfo.origin);


	return (
		<div className="hotels">
			<div className="container">
				<Navigation logo={LastLogo} />
				<hr />
				{/* <div className="details">
					<h5>Form {origin}</h5>
					<hr />
					<h5>To {destination}</h5>
				</div> */}
				<div className="row">

					<div className=" room-details col-lg-4">

						<div className="  row align-items-center my-4 col-sm-10">

							<div className="Place-distanation">
								<h5>Form {origin}</h5>
								<h5>To {destination}</h5>
							</div>

							<div className="distination">
								<div className="distination-place">
									<img src={TicketImg} alt="" />
									<p>Ticket 1</p>
									<p>$67</p>
								</div>
								<div className="distination-place">
									<img src={TicketImg} alt="" />
									<p>Ticket 2</p>
									<p>$67</p>
								</div>
								<div className="distination-place">
									<img src={TicketImg} alt="" />
									<p>Ticket 3</p>
									<p>$67</p>
								</div>
							</div>
						</div>

					</div>

					<div className="map-details col-lg-8">
						<iframe
							title="Find Location"
							width="700"
							height="588"
							frameborder="0"
							src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCspGr1eo_7gDpc6NGHMplDVjRt1OZrDXI&q=${slug}`}
							// src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC9bFTbKlYcWhjl9UiqWU2xkUuqPLQLJ9E=${slug}`}
							allowfullscreen
						// AIzaSyBknJstMpBHDVOEBLVh8orWI6YfWuxRQ18
						/>
					</div>
				</div>


			</div>
		</div>
	);
};

export default Hotels;
