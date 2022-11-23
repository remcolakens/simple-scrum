import DropContainer from '@/components/organisms/DropContainer/DropContainer';
import { Container, Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { data } from '../data';
import { ITickets } from '../types/global';

export const Home: React.FC = () => {
	const [SSR, setSSR] = useState(true);
	const [items] = useState({ ...data });

	const { columns, tickets } = items;

	useEffect(() => {
		setSSR(false);
	}, []);

	const onDragEndHandler = () => {
		console.log('drag');
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
