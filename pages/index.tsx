import {
	Box,
	Container,
	Grid,
	GridItem,
	Heading,
	Text,
} from '@chakra-ui/react';
import React from 'react';

export const Home: React.FC = () => {
	return (
		<Container maxW="container.lg">
			<Grid templateColumns="repeat(4, 1fr)" gap={5}>
				<GridItem bg="gray.100" p={5} flexBasis={1}>
					<Heading bg="gray.300" size="md" p={2} mb={2} flexShrink={0}>
						Good
					</Heading>

					<Box p={2} my={2} border="1px" borderColor="gray.700" bg="white">
						<Text>API finally pushed to prod</Text>
					</Box>
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
		</Container>
	);
};

export default Home;
