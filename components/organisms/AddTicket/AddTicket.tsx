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
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useApp } from '../../../context/app';

const AddTicket: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { addTicket } = useApp();

	const onSubmit = (data) => {
		// split data to variables
		const { title, category } = data;

		// call func to save data to state
		addTicket(title, category);

		// reset form
		reset();

		//close modal
		onClose();
	};

	return (
		<>
			<Button onClick={onOpen} colorScheme="blue" size="md">
				Add new ticket
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent mx={5}>
					<ModalHeader>Add new ticket</ModalHeader>
					<ModalCloseButton />

					<form onSubmit={handleSubmit(onSubmit)}>
						<ModalBody>
							<FormControl isRequired isInvalid={!!errors.title}>
								<FormLabel>Title</FormLabel>
								<Input {...register('title', { required: true })} />
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

export default AddTicket;
