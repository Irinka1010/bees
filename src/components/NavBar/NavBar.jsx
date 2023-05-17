import React from 'react';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navigation, Logo, LogoImg, NavBtn, Collapse } from './NavBar.styled';
import { NavLink } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
const NavBar = () => {
	return (
		<Navigation collapseOnSelect expand="md" variant="light" style={{ padding: 0 }}>
			<Container>
				<NavBtn aria-controls="responsive-navbar-nav" />
				<Logo>
					<LogoImg src={logo} alt="logo" width="70" /> bee
					{/* <NavLogo to={}> */}
					{/* </NavLogo> */}
				</Logo>

				<Collapse id="responsive-navbar-nav">
					<Nav className="me-auto" style={{ marginLeft: '50px' }}>
						<Nav>
							<NavDropdown title="Пчелы" id="basic-nav-up" as="ul">
								<NavDropdown.Item href="#action/3.1">
									Индийская пчела
									<NavDropdown.Item href="#action/3.2">Красная</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Розовоя</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.4">Чорная</NavDropdown.Item>
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.1">
									Арликовая пчела
									<NavDropdown.Item href="#action/3.2">Красная</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Розовоя</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.4">Чорная</NavDropdown.Item>
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav.Link href="#home">Дом пчелы</Nav.Link>
						<Nav.Link href="#features">Соты</Nav.Link>
						<Nav.Link href="#pricing">Мед</Nav.Link>
						<Nav.Link href="#pricing">Таблица данных</Nav.Link>
					</Nav>
					<NavLink href="#pricing">Регистрация</NavLink>
				</Collapse>
			</Container>
		</Navigation>
	);
};
export default NavBar;
