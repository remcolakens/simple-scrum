import DropContainer from '@/components/organisms/DropContainer/DropContainer';
import { Container, Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useApp } from '../context/app';
import { ITickets } from '../types/global';

export const Home: React.FC = () => {
	const { onDragEndHandler, columns, tickets } = useApp();

	const [SSR, setSSR] = useState(true);

	useEffect(() => {
		setSSR(false);
	}, []);

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
