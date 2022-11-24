import Rating from '@/components/molecules/Rating/Rating';
import { IDropContainer } from '@/components/organisms/DropContainer/types';
import EditTicket from '@/components/organisms/EditTicket/EditTicket';
import { Box, Flex, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const DropContainer: React.FC<IDropContainer> = ({ id, title, tickets }) => (
	<GridItem bg="gray.100" h="100%">
		<Box bg="white">
			<Heading size="md" pb={5} textAlign="center">
				{title}
			</Heading>
		</Box>

		<Droppable droppableId={id}>
			{({ innerRef, placeholder }) => (
				<Flex
					ref={innerRef}
					direction="column"
					p={5}
					minH={{ base: '40vh', lg: '100vh' }}
				>
					{tickets.map(({ id, title, rating }, index) => (
						<Draggable key={id} draggableId={id} index={index}>
							{({ draggableProps, dragHandleProps, innerRef }) => (
								<Flex
									p={4}
									my={2}
									borderRadius={4}
									bg="white"
									border="1px"
									borderColor="gray.300"
									boxShadow="md"
									ref={innerRef}
									{...draggableProps}
									{...dragHandleProps}
								>
									<Flex flexGrow="3" flexDirection="column">
										<Text>{title}</Text>
										<Rating rating={rating} draggableId={id} />
									</Flex>

									<Flex alignItems="center">
										<EditTicket ticketId={id} />
									</Flex>
								</Flex>
							)}
						</Draggable>
					))}
					{placeholder}
				</Flex>
			)}
		</Droppable>
	</GridItem>
);

export default DropContainer;
