import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const List = styled.button`
	border: 0;
	background-color: inherit;
`;
export const ListItem = styled.ul`
	position: absolute;
	top: 60px;
	left: 150px;
	padding: 10px;
	background-color: #ffffff;
	display: flex;
	border-radius: 5px;
	gap: 20px;
	@media (max-width: 768px) {
		background-color: #faa61a;
		display: block;
		position: relative;
		top: 20px;
		left: 10px;
	}
`;
export const LinkMenu = styled(Link)`
	color: #665822;
	font-weight: 400;
	font-style: 14px;
	padding: 5px;
	&:hover {
		background-color: rgb(244, 228, 228);
	}
`;
