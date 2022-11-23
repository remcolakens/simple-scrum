import {
	Box,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export const Home: React.FC = () => {
	const [SSR, setSSR] = useState(true);

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
						<GridItem bg="gray.100" p={5} flexBasis={1}>
							<Heading bg="gray.300" size="md" p={2} mb={2} flexShrink={0}>
								Good
							</Heading>

							<Droppable droppableId={'1'}>
								{({ innerRef, placeholder }) => (
									<Flex
										ref={innerRef}
										direction="column"
										style={{ height: '100%' }}
									>
										<Draggable key={1} draggableId={'1'} index={1}>
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
													<Text>API finally pushed to prod</Text>
												</Box>
											)}
										</Draggable>

										{placeholder}
									</Flex>
								)}
							</Droppable>
						</GridItem>
						<GridItem bg="gray.100" p={5} flexBasis={1}>
							<Heading bg="gray.300" size="md" p={2} mb={2} flexShrink={0}>
								Bad
							</Heading>
						</GridItem>
						<GridItem bg="gray.100" p={5} flexBasis={1}>
							<Heading bg="gray.300" size="md" p={2} mb={2} flexShrink={0}>
								Actions
							</Heading>
						</GridItem>
						<GridItem bg="gray.100" p={5} flexBasis={1}>
							<Heading bg="gray.300" size="md" p={2} mb={2} flexShrink={0}>
								Ideas
							</Heading>
						</GridItem>
					</Grid>
				</DragDropContext>
			</Container>
		);
	}

	return null;
};

export default Home;
