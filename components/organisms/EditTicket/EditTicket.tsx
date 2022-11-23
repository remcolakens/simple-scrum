import { IEditTicket } from '@/components/organisms/EditTicket/types';
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	Spacer,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useApp } from '../../../context/app';

const EditTicket: React.FC<IEditTicket> = ({ ticketId }) => {
	const { tickets, columns } = useApp();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		// add default values since react-hook-form is our controller
		defaultValues: {
			title: tickets.filter((ticket) => ticket.id === ticketId)[0].title,
			category: columns.find((col) => col.ticketId.includes(ticketId)).id,
		},
	});

	const { isOpen, onOpen, onClose } = useDisclosure();
	const { saveTicket, deleteTicket } = useApp();

	const onSubmit = (data) => {
		// split data to variables
		const { title, category } = data;

		// call func to save data to state
		saveTicket(ticketId, title, category);

		//close modal
		onClose();
	};

	const handleDelete = () => {
		deleteTicket(ticketId);
		onClose();
	};

	return (
		<>
			<Button onClick={onOpen} variant="link" colorScheme="blue">
				<Text fontSize="xs">(edit)</Text>
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit ticket</ModalHeader>
					<ModalCloseButton />

					<form onSubmit={handleSubmit(onSubmit)}>
						<ModalBody>
							<FormControl isRequired isInvalid={!!errors.title}>
								<FormLabel>Title</FormLabel>
								<Input
									placeholder="Title"
									{...register('title', { required: true })}
								/>
							</FormControl>

							<FormControl mt={3} isRequired isInvalid={!!errors.category}>
								<FormLabel>Category</FormLabel>
								<Select
									placeholder="Select category"
									{...register('category', { required: true })}
								>
									<option value="good">Good</option>
									<option value="bad">Bad</option>
									<option value="actions">Actions</option>
									<option value="ideas">Ideas</option>
								</Select>
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme="red" mr={3} onClick={handleDelete}>
								Delete
							</Button>
							<Spacer />
							<Button colorScheme="blue" mr={3} type="submit">
								Save
							</Button>
							<Button variant="ghost" onClick={onClose}>
								Cancel
							</Button>
						</ModalFooter>
					</form>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditTicket;
