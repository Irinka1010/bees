import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
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
	margin-right: 30px;
	@media (max-width: 768px) {
		margin-left: auto;
		margin-right: auto;
	}
`;
export const NavLogo = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
`;
export const LogoImg = styled.img`
	margin-right: 5px;
	width: 30px;
`;
export const NavList = styled.ul`
	display: flex;
	align-items: center;
	.nav-item {
		margin-right: 20px;
		&:last-child {
			margin: 0;
		}
		@media (max-width: 768px) {
			margin-bottom: 40px;
			&:last-child {
				margin: 0;
			}
		}
	}

	@media (max-width: 768px) {
		display: block;
		margin-bottom: 40px;
		font-size: 40px;
		color: #665822;
	}
`;
export const HeaderLink = styled(NavLink)`
	font-style: 18px;
	font-weight: 700;

	color: #665822;
	&.active {
		color: #372d2d;
	}
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
	justify-content: space-between;
	.nav-button {
		border: 0;
		background-color: inherit;
		cursor: pointer;
		font-style: 18px;
		font-weight: 700;

		color: #665822;
		@media (max-width: 768px) {
			font-size: 40px;
		}
	}
	@media (max-width: 768px) {
		position: fixed;
		top: 80px;
		left: 0;
		z-index: 5;
		width: 100vw;
		height: 100vh;

		background-color: #faa61a;
		box-shadow: '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)';
		border-radius: 5px;

		text-align: center;
	}
`;
