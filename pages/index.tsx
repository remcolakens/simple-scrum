import DropContainer from '@/components/organisms/DropContainer/DropContainer';
import { Container, Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { data } from '../data';
import { ITickets } from '../types/global';

export const Home: React.FC = () => {
	const [SSR, setSSR] = useState(true);
	const [items, setItems] = useState({ ...data });

	const { columns, tickets } = items;

	useEffect(() => {
		setSSR(false);
	}, []);

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

	if (!SSR) {
		return (
			<Container maxW="container.lg">
				<DragDropContext onDragEnd={onDragEndHandler}>
					<Grid templateColumns="repeat(4, 1fr)" gap={5}>
						{columns.map(({ id, title, ticketId }) => (
							<DropContainer
								id={id}
								key={id}
								title={title}
								tickets={ticketId.map(
									(id) => tickets.find((ticket) => ticket.id === id) as ITickets
								)}
							/>
						))}
					</Grid>
				</DragDropContext>
			</Container>
		);
	}

	return null;
};

export default Home;
