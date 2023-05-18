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
	text-transform: uppercase;

	transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
	&:hover,
	&:focus {
		background: #665822;
		color: #fdda55;
	}
`;
