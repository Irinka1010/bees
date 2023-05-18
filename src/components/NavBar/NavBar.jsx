import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import ModalRegister from '../Modal/Modal';

import {
	Header,
	HeaderLink,
	NavList,
	Navigation,
	Logo,
	LogoImg,
	NavBtn,
	Collapse,
	NavLogo,
} from './NavBar.styled';

import logo from '../../assets/img/logo.png';
import MenuBee from './MenuBee/MenuBee';

const NavBar = () => {
	const [show, setShow] = useState(false);
	const [, setUsers] = useState([]);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const onSubmitForm = user => {
		setUsers(prev => {
			const newUser = {
				...user,
			};
			return [...prev, newUser];
		});
		console.log(user);
		handleClose();
	};
	return (
		<Header>
			<Navigation collapseOnSelect expand="md" variant="light" style={{ padding: 0 }}>
				<Container>
					<NavBtn aria-controls="responsive-navbar-nav" />

					<NavLogo to="/">
						<Logo>
							<LogoImg src={logo} alt="logo" width="70" /> bee
						</Logo>
					</NavLogo>

					<Collapse id="responsive-navbar-nav">
						<NavList>
							<li className="nav-item">
								<MenuBee />
							</li>
							<li className="nav-item">
								<HeaderLink to="/">Дом пчелы</HeaderLink>
							</li>
							<li className="nav-item">
								<HeaderLink>Соты</HeaderLink>
							</li>
							<li className="nav-item">
								<HeaderLink>Мед</HeaderLink>
							</li>
							<li className="nav-item">
								<HeaderLink to="/table">Таблица данных</HeaderLink>
							</li>
						</NavList>

						<button type="button" className="nav-button" onClick={handleShow}>
							Регистрация
						</button>
						<ModalRegister show={show} onHide={handleClose} onSubmit={onSubmitForm} />
					</Collapse>
				</Container>
			</Navigation>
		</Header>
	);
};
export default NavBar;
