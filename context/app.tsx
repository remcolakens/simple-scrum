import { createContext, useContext, useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { data } from '../data';
import { IColumns, ITickets } from '../types/global';

interface IAppContext {
	columns: IColumns[];
	tickets: ITickets[];
	onDragEndHandler: (result: DropResult) => unknown;
	saveRating: (rating: number, id: string) => unknown;
}

const defaultState = {
	columns: null,
	tickets: null,
	onDragEndHandler: () => undefined,
	saveRating: () => undefined,
};

const AppContext = createContext<IAppContext>(defaultState);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
	const [items, setItems] = useState({ ...data });

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
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useApp = () => useContext(AppContext);
