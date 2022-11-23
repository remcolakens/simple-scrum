export interface ITickets {
	id: string;
	title: string;
}

export interface IColumns {
	id: string;
	title: string;
	ticketId: string[];
}

export interface IData {
	tickets: ITickets[];
	columns: IColumns[];
}
