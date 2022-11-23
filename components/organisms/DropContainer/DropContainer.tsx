import Rating from '@/components/molecules/Rating/Rating';
import { IDropContainer } from '@/components/organisms/DropContainer/types';
import EditTicket from '@/components/organisms/EditTicket/EditTicket';
import { Box, Flex, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const DropContainer: React.FC<IDropContainer> = ({ id, title, tickets }) => (
	<GridItem bg="gray.100" p={5} flexBasis={1}>
		<Heading bg="gray.300" size="md" p={2} mb={2} flexShrink={0}>
			{title}
		</Heading>
		<Droppable droppableId={id}>
			{({ innerRef, placeholder }) => (
				<Flex ref={innerRef} direction="column" style={{ height: '100%' }}>
					{tickets.map(({ id, title, rating }, index) => (
						<Draggable key={id} draggableId={id} index={index}>
							{({ draggableProps, dragHandleProps, innerRef }) => (
								<Box
									p={2}
									my={2}
									border="1px"
									borderColor="gray.700"
									bg="white"
									ref={innerRef}
									{...draggableProps}
									{...dragHandleProps}
								>
									<Text>{title}</Text>

									<Flex alignItems="center" justifyContent="space-between">
										<Rating rating={rating} draggableId={id} />

										<EditTicket ticketId={id} />
									</Flex>
								</Box>
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
