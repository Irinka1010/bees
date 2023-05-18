import styled from 'styled-components';
import { Button, Modal, Form } from 'react-bootstrap';

export const ModalWrapper = styled(Modal)`
	border-radius: 16px;

	& .modal-content {
		width: 351px;
		margin: 0 auto;
	}
`;

export const ModalBody = styled(Modal.Body)`
	padding: 30px;
`;

export const ModalTitle = styled(Modal.Title)`
	text-align: center;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 1.42;
	color: #665822;
	margin-bottom: 32px;
`;

export const FormGroup = styled(Form.Group)`
	margin-bottom: 15px;
`;

export const LastFormGroup = styled(Form.Group)`
	margin-bottom: 35px;
`;

export const FormLabel = styled(Form.Label)`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 1.42;
	color: #665822;
	margin-bottom: 3px;
`;

export const FormControl = styled(Form.Control)`
	border-radius: 0;
	border: 1px solid #665822;
	background-color: #ffffff;
	height: 40px;
`;

export const ModalButton = styled(Button)`
	width: 100%;
	height: 44px;
	background-color: #ffffff;
	border: 2px solid #665822;
	border-radius: 0;

	opacity: 0.502;
	font-size: 1.88;
	line-height: 34px;
	color: #665822;
	font-weight: 400;
	font-family: 'Roboto';

	display: flex;
	justify-content: center;
	align-items: center;
	vertical-align: middle;
	transform: perspective(1px) translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	position: relative;
	transition-property: color;
	transition-duration: 0.3s;

	&:before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #665822;
		transform: scaleX(0);
		transform-origin: 0 50%;
		transition-property: transform;
		transition-duration: 0.3s;
		transition-timing-function: ease-out;
	}
	&:hover,
	&:focus,
	&:active {
		opacity: 1;
		color: #ffdc55;
		background-color: transparent;
		border-color: #665822;
	}
	&:hover:before,
	&:focus:before,
	&:active:before {
		transform: scaleX(1);
		border-color: #665822;
	}

	&:disabled {
		background-color: #665822;
		opacity: 0.502;
		border: transparent;
	}
`;
