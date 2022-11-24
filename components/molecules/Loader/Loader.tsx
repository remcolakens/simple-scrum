import { Flex, Spinner, Text } from '@chakra-ui/react';
import React from 'react';

const Loader: React.FC = () => {
	return (
		<Flex
			direction="column"
			alignItems="center"
			justifyContent="center"
			h="100vh"
		>
			<Spinner
				thickness="4px"
				speed="0.65s"
				emptyColor="gray.300"
				color="blue.400"
				size="xl"
			/>
			<Text mt={5} fontSize="xs">
				Loading...
			</Text>
		</Flex>
	);
};

export default Loader;
