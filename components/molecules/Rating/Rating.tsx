import { StarIcon } from '@chakra-ui/icons';

import { IRating } from '@/components/molecules/Rating/types';
import { Flex, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useApp } from '../../../context/app';

const Rating: React.FC<IRating> = ({ rating, draggableId }) => {
	const { saveRating } = useApp();

	const [selectedRating, setSelectedRating] = useState(rating);

	const onClick = (i) => {
		// first click is 1 star second click is removing vote
		if (i === 0 && rating === 1) {
			saveRating(0, draggableId);
		} else {
			saveRating(i + 1, draggableId);
		}
	};

	return (
		<Stack isInline my={3}>
			{Array.from({ length: 5 }, (_, i) => (
				<Flex
					key={i}
					as="button"
					height="18px"
					width="18px"
					color={i < selectedRating ? 'blue.400' : 'gray.300'}
					_hover={{ color: 'blue.400' }}
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
