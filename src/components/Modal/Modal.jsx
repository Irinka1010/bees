import React from 'react';
import { Form } from 'react-bootstrap';
import useForm from '../../helpers/hooks/useForm';
import {
	ModalWrapper,
	ModalBody,
	ModalTitle,
	FormGroup,
	LastFormGroup,
	FormLabel,
	FormControl,
	ModalButton,
} from './Modal.styled';

const initialState = {
	name: '',
	email: '',
	phone: '',
	password: '',
	confirmPass: '',
};

function ModalRegister({ onSubmit, show, handleClose }) {
	const { state, handleChange, handleSubmit, validated } = useForm({
		initialState,
		onSubmit,
	});

	const { name, email, phone, password, confirmPass } = state;

	return (
		<ModalWrapper centered="true" show={show} onHide={handleClose} animation={false}>
			<ModalBody>
				<ModalTitle className="mb-3" id="contained-modal-title-vcenter">
					Зарегистрируйтесь
				</ModalTitle>

				<Form onSubmit={handleSubmit} noValidate validated={validated}>
					<FormGroup>
						<FormLabel>Имя</FormLabel>
						<FormControl name="name" value={name} type="text" onChange={handleChange} required />
						<Form.Control.Feedback type="invalid">Введите корректное имя</Form.Control.Feedback>
					</FormGroup>

					<FormGroup>
						<FormLabel>Почта</FormLabel>
						<FormControl name="email" value={email} type="email" onChange={handleChange} required />
						<Form.Control.Feedback type="invalid">Введите корректный email</Form.Control.Feedback>
					</FormGroup>

					<FormGroup>
						<FormLabel>Телефон</FormLabel>
						<FormControl name="phone" value={phone} type="Phone" onChange={handleChange} required />
						<Form.Control.Feedback type="invalid">
							Недостаточное количество символов
						</Form.Control.Feedback>
					</FormGroup>

					<FormGroup>
						<FormLabel>Пароль</FormLabel>
						<FormControl
							name="password"
							value={password}
							type="password"
							onChange={handleChange}
							required
						/>
						<Form.Control.Feedback type="invalid">
							Поле ввода не должно быть пустым
						</Form.Control.Feedback>
					</FormGroup>

					<LastFormGroup>
						<FormLabel>Повторите пароль</FormLabel>
						<FormControl
							name="confirmPass"
							value={confirmPass}
							type="password"
							onChange={handleChange}
							required
						/>
						<Form.Control.Feedback type="invalid">
							Поле ввода не должно быть пустым
						</Form.Control.Feedback>
					</LastFormGroup>

					{validated ? (
						<ModalButton type="submit">Зарегистрируйтеся</ModalButton>
					) : (
						<ModalButton disabled>Зарегистрируйтеся</ModalButton>
					)}
				</Form>
			</ModalBody>
		</ModalWrapper>
	);
}

export default ModalRegister;
