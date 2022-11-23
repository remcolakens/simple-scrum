import { IData } from '../types/global';

export const data: IData = {
	tickets: [
		{
			id: '8eafcfba-53d3-4e7d-91d9-23a57b8dc296',
			title: 'API finally pushed to prod',
			rating: 1,
		},
		{
			id: '5453de58-fdb4-4510-810c-79d69a2904dd',
			title: 'Designer on board',
			rating: 2,
		},
		{
			id: 'dc071ba6-8eac-4411-9e21-bba3292a1d09',
			title: 'Wait too long for team to respond on slack',
			rating: 0,
		},
		{
			id: '0a1822e2-d564-4f3c-b9aa-e38d58ef8345',
			title: 'Sprint goal unclear',
			rating: 0,
		},
		{
			id: 'dacb83d1-9251-4018-b1b6-6d2c14e1931a',
			title: 'Too much tickets waiting for PO review',
			rating: 0,
		},
		{
			id: 'd3c60d35-a6b2-41e4-8826-755cbb630dc8',
			title: 'Plan daily huddle at 11:00 am',
			rating: 0,
		},
		{
			id: '5453de58-fdb4-4510-810c-79d69a2904da',
			title: 'Invite stakeholders to demos more often?',
			rating: 0,
		},
	],
	columns: [
		{
			id: 'good',
			title: 'Good',
			ticketId: [
				'8eafcfba-53d3-4e7d-91d9-23a57b8dc296',
				'5453de58-fdb4-4510-810c-79d69a2904dd',
				'dc071ba6-8eac-4411-9e21-bba3292a1d09',
				'0a1822e2-d564-4f3c-b9aa-e38d58ef8345',
			],
		},
		{
			id: 'bad',
			title: 'Bad',
			ticketId: ['dacb83d1-9251-4018-b1b6-6d2c14e1931a'],
		},
		{
			id: 'actions',
			title: 'Actions',
			ticketId: ['d3c60d35-a6b2-41e4-8826-755cbb630dc8'],
		},
		{
			id: 'ideas',
			title: 'Ideas',
			ticketId: ['5453de58-fdb4-4510-810c-79d69a2904da'],
		},
	],
};
