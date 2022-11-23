import { StarIcon } from '@chakra-ui/icons';

import { IRating } from '@/components/molecules/Rating/types';
import { Flex, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Rating: React.FC<IRating> = ({ rating }) => {
	const [selectedRating, setSelectedRating] = useState(rating);

	const onClick = (i) => {
		console.log(i);
	};

	return (
		<Stack isInline my={3}>
			{Array.from({ length: 5 }, (_, i) => (
				<Flex
					key={i}
					as="button"
					height="18px"
					width="18px"
					color={i < selectedRating ? 'teal.500' : 'gray.300'}
					_hover={{ color: 'teal.500' }}
					onMouseEnter={() => setSelectedRating(i)}
					onMouseLeave={() => setSelectedRating(rating)}
					onClick={() => onClick(i)}
				>
					<StarIcon width="100%" height="100%" />
				</Flex>
			))}
		</Stack>
	);
};

export default Rating;
