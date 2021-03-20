import React, { useContext, useEffect, useState } from 'react';
import './TicketConfirm.css';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import LastLogo from '../../Image/images.png';
import Navigation from '../Navigation/Navigation';
import TicketImg from "../../Image/train1.jpg";
import TicketImg2 from "../../Image/train2.jpg";
import TicketImg3 from "../../Image/train5.jpg";

const TicketConfirm = () => {
	let { url } = useParams();
	const [bookingInfo, setBookingInfo] = useContext(UserContext);
	const { origin, destination } = bookingInfo;
	console.log(bookingInfo.destination);
	console.log(bookingInfo.origin);


	return (

		<div className="confirm-travel">
			<div className="hotels">

				<div className="container">
					<Navigation logo={LastLogo} />
					<hr />
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
										<img src={TicketImg2} alt="" />
										<p>Ticket 2</p>
										<p>$67</p>
									</div>
									<div className="distination-place">
										<img src={TicketImg3} alt="" />
										<p>Ticket 3</p>
										<p>$67</p>
									</div>
								</div>
							</div>

						</div>

						<div className="simple-map col-lg-8">
							<iframe
								title="Find Location" height="588" frameborder="0" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCspGr1eo_7gDpc6NGHMplDVjRt1OZrDXI&q=${url}`} allowfullscreen />
						</div>
					</div>


				</div>
			</div>

		</div>

	);
};

export default TicketConfirm;
