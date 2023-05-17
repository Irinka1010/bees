import React from 'react';
import { ButtonForm } from './Button.styles';
const Button = ({ text, type }) => {
	return (
		<>
			<ButtonForm type={type}>{text}</ButtonForm>
		</>
	);
};
export default Button;
