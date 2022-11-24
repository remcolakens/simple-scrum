import Loader from '@/components/molecules/Loader/Loader';
import AddTicket from '@/components/organisms/AddTicket/AddTicket';
import DropContainer from '@/components/organisms/DropContainer/DropContainer';
import { Container, Divider, Flex, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useApp } from '../context/app';
import { ITickets } from '../types/global';

export const Home: React.FC = () => {
	const { onDragEndHandler, columns, tickets } = useApp();

	if (columns && tickets) {
		return (
			<Container maxW="container.xl">
				<Flex flexDirection="column" alignItems="flex-end" my={5}>
					<Flex
						alignItems="center"
						justifyContent="space-between"
						w="100%"
						flexDirection={{ base: 'column', md: 'row' }}
					>
						<Heading size="lg" mb={{ base: 5, md: 0 }}>
							Simple Scrum Board
						</Heading>
						<AddTicket />
					</Flex>
				</Flex>
				<Divider />

				<DragDropContext onDragEnd={onDragEndHandler}>
					<Grid
						templateColumns={{
							base: 'repeat(1, 1fr)',
							md: 'repeat(2, 1fr)',
							lg: 'repeat(4, 1fr)',
						}}
						gap={{ base: 5, lg: 3 }}
						py={5}
					>
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

	return <Loader />;
};

export default Home;
