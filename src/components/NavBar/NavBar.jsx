import React from 'react';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Header, Navigation, Logo, LogoImg, NavBtn, Collapse } from './NavBar.styled';
import { NavLink } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<Header>
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
							<Link to="/" end>
								Дом пчелы
							</Link>
							<Nav.Link href="#">Соты</Nav.Link>
							<Nav.Link href="#">Мед</Nav.Link>
							<Link to="/table">Таблица данных</Link>
						</Nav>
						<NavLink href="#">Регистрация</NavLink>
					</Collapse>
				</Container>
			</Navigation>
		</Header>
	);
};
export default NavBar;
