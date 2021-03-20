import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import "./Booking.css"
import Navigation from '../Navigation/Navigation';
import Bookedlogo from '../../Image/images.png';
import { UserContext } from '../../App';

function Booking() {
	const [bookingInfo, setBookingInfo] = useContext(UserContext);

	const {  url } = useParams();

	const [bookedPlace, setBookedPlace] = useState({
		origin: '',
		destination: '',
		from: '',
		to: ''
	});
	const handleDate = (e) => {
		setBookedPlace({
			...bookedPlace,
			[e.target.name]: e.target.value
		});
		setBookingInfo({
			...bookingInfo,
			[e.target.name]: e.target.value
		});
	};

	const handleInput = (e) => {
		console.log(e.target.name, e.target.value);
		setBookedPlace({
			...bookedPlace,
			[e.target.name]: e.target.value
		});
		setBookingInfo({
			...bookingInfo,
			[e.target.name]: e.target.value
		});
	};

	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`/tickets/${url}`);
	};

	return (
		<div className="booking">
			<div className="container">
				<Navigation logo={Bookedlogo} />
				<div className="booking-area row align-items-center justify-content-between">
	
					<div className="col-lg-4 form-container">
						<form onSubmit={handleSubmit} className="row justify-content-between">
							<div className="form-group col-lg-11">
								<label htmlFor="origin">Pick Form</label>
								<input
									name="origin"
									value={bookedPlace.origin}
									onChange={handleInput}
									type="text"
									className="form-control"
									required
								/>
							</div>
							<div className="form-group col-lg-11 ">
								<label htmlFor="origin">Pick To</label>
								<input
									name="destination"
									value={bookedPlace.destination}
									onChange={handleInput}
									type="text"
									className="form-control"
								/>
							</div>

							<div className="form-row">
								<div className="form-group col-lg-11 date">
									<label htmlFor="from">Date</label>
									<input
										name="from"
										onChange={handleDate}
										value={bookedPlace.from}
										type="date"
										className="form-control"
										required
									/>
								</div>
								<div className="form-group col-lg-11 date ">
									<label htmlFor="to">To</label>
									<input
										name="to"
										onChange={handleDate}
										value={bookedPlace.to}
										type="date"
										className="form-control"
										required
									/>
								</div>
							</div>

							<div className="col-lg-10">
								<input className="btn form-control btn-custom" type="submit" value="Search" />
							</div>
						</form>
					</div>
				</div>
			</div>

		</div>
	);
}

export default Booking;
