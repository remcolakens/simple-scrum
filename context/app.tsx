import { createContext, useContext, useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import { data } from '../data';
import { IColumns, ITickets } from '../types/global';

interface IAppContext {
	columns: IColumns[];
	tickets: ITickets[];
	onDragEndHandler: (result: DropResult) => unknown;
	saveRating: (rating: number, id: string) => unknown;
	addTicket: (title: string, category: string) => unknown;
	saveTicket: (id: string, title: string, category: string) => unknown;
}

const defaultState = {
	columns: null,
	tickets: null,
	onDragEndHandler: () => undefined,
	saveRating: () => undefined,
	addTicket: () => undefined,
	saveTicket: () => undefined,
};

const AppContext = createContext<IAppContext>(defaultState);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
	const [items, setItems] = useState({ ...data });

	const saveTicket = (id, title, category) => {
		setItems((prevState) => {
			// find current ticket in one of the four "columns"
			const sourceIds = prevState.columns.filter((col) =>
				col.ticketId.includes(id)
			)[0].ticketId;

			// find "array index" of current ticket
			const sourceIndex = sourceIds.indexOf(id);

			// delete this ticket
			sourceIds.splice(sourceIndex, 1);

			// add id to new selected category
			prevState.columns
				.filter((col) => col.id === category)[0]
				.ticketId.push(id);

			return {
				...prevState,
				// update the title of the ticket while keeping rest of the data intact
				tickets: [
					...prevState.tickets.filter((i) => i.id !== id),
					{
						...prevState.tickets.find((i) => i.id === id),
						title: title,
					},
				],
			};
		});
	};

	const addTicket = (title, category) => {
		setItems((prevState) => {
			const id = uuidv4();
			prevState.columns.find((c) => c.id === category).ticketId.push(id);
			prevState.tickets.push({
				id: id,
				title: title,
				rating: 0,
			});

			return {
				...prevState,
			};
		});
	};

	const saveRating = (rating, id) => {
		setItems((prevState) => {
			const newState = {
				...prevState.tickets.find((i) => i.id === id),
				rating: rating,
			};

			return {
				...prevState,
				tickets: [...prevState.tickets.filter((i) => i.id !== id), newState],
			};
		});
	};

	const onDragEndHandler = (result: DropResult) => {
		const { source, destination, draggableId } = result;

		if (source && destination) {
			setItems((prevState) => {
				// source

				// These variables help retrieve the source & destinations of the drag n drop
				// e.g. sourceIndex: 4 && sourceId: "todo"
				const { index: sourceIndex, droppableId: sourceId } = source;
				const { index: destinationIndex, droppableId: destinationId } =
					destination;

				// These variables help retrieve the container information
				// {id: 'todo', title: 'Todo', ticketId: Array(5)}
				const sourceContainer = prevState.columns.find(
					(column) => column.id === sourceId
				);
				const destinationContainer = prevState.columns.find(
					(column) => column.id === destinationId
				);

				// These variables show the
				// ['5d5b5e952871780ef474807b', '5d5b5e952871780ef474807c', '5d5b5e952871780ef474808b', '5d5b5e952871780ef474808c', '5d5b5e952871780ef474809b']
				const sourceIds = Array.from(sourceContainer.ticketId);
				const destinationIds = Array.from(destinationContainer.ticketId);

				// check if source and destination container are the same
				const isSameContainer = sourceContainer.id === destinationContainer.id;

				//  REMOVE ticketId from the source "ticketId" array via the sourceIndex
				sourceIds.splice(sourceIndex, 1);

				// ADD tickedId (draggableId) to the source or destination "ticketId" array
				if (isSameContainer) {
					sourceIds.splice(destinationIndex, 0, draggableId);
				} else {
					destinationIds.splice(destinationIndex, 0, draggableId);
				}

				// update the source container with changed sourceIds
				const newSourceContainer = {
					...sourceContainer,
					ticketId: sourceIds,
				};

				// update the destination container with changed destinationIds
				const newDestinationContainer = {
					...destinationContainer,
					ticketId: destinationIds,
				};

				// loop through current columns and update the source
				// and destination containers
				const columns = prevState.columns.map((column) => {
					if (column.id === newSourceContainer.id) {
						return newSourceContainer;
					} else if (
						column.id === newDestinationContainer.id &&
						!isSameContainer
					) {
						return newDestinationContainer;
					} else {
						return column;
					}
				});

				return {
					...prevState,
					columns,
				};
			});
		}
	};

	const { columns, tickets } = items;

	return (
		<AppContext.Provider
			value={{
				columns: columns as IColumns[],
				tickets: tickets as ITickets[],
				onDragEndHandler: onDragEndHandler,
				saveRating: saveRating,
				addTicket: addTicket,
				saveTicket: saveTicket,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useApp = () => useContext(AppContext);
