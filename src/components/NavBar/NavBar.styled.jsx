import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
export const Header = styled.header`
	background-color: #faa61a;
`;
export const Section = styled.section`
	padding: 60px 0 60px;
`;
export const Navigation = styled(Navbar)`
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Logo = styled(Navbar.Brand)`
	display: flex;
	@media (max-width: 768px) {
		margin-left: auto;
		margin-right: auto;
	}
`;
export const NavLogo = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const LogoImg = styled.img`
	margin-right: 5px;
	width: 30px;
`;
export const NavBtn = styled(Navbar.Toggle)`
	margin: 28px 0;

	&:focus,
	&:hover {
		border: 2px solid #40bfff;
		box-shadow: none;
	}
`;
export const Collapse = styled(Navbar.Collapse)`
	@media (max-width: 768px) {
		background-color: #faa61a;
		box-shadow: '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)';
		border-radius: 5px;
		/* padding: 20px; */
		text-align: center;
		z-index: 777;
	}
`;
