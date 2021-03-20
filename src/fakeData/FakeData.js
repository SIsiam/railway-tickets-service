var fakeData = [
	{
		id: 1,
		TicketName: "One Time Tickets",
		url: 'ONETIME',
		price: 100,
		type1: 'Ticket1',
		type2: 'Ticket2',
		type3: 'Ticket3',
		type: [
			{
				id: 89310,
				type1: 'Ticket1',
				type2: 'Ticket2',
				type3: 'Ticket3',
			},
		]
	},


	{
		id: 2,
		TicketName: 'One Day Pass',
		url: 'ONEDAY',
		price: 500,
		type: [
			{
				id: 48662,
				type1: 'Ticket1',
				type2: 'Ticket2',
				type3: 'Ticket3'
			},
		]
	},


	{
		id: 3,
		TicketName: 'MONTHLY PASS',
		url: 'MONTHLY',
		price: 1500,
		type: [
			{
				id: 123456,
				type1: 'Ticket1',
				type2: 'Ticket2',
				type3: 'Ticket3'
			},
		]
	},


	{
		id: 4,
		TicketName: 'ANNUL PASS',
		url: 'ANNUL',
		price: 9000,
		type: [
			{
				id: 123456,
				type1: 'Ticket1',
				type2: 'Ticket2',
				type3: 'Ticket3'
			},
		]
	}



];

export default fakeData;
