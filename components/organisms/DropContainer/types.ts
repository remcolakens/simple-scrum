import { ITickets } from '../../../types/global';

export interface IDropContainer {
	id: string;
	title: string;
	tickets: ITickets[];
}
