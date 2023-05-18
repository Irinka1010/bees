import styled from 'styled-components';
export const ButtonForm = styled.button`
	box-sizing: border-box;
	outline: 0px;

	border: 2px solid #665822;
	padding: 15px 18px;

	border-radius: 5px;
	background: inherit;

	font-weight: 400;
	font-size: 18px;
	line-height: 1.22;
	color: #665822;

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
`;
