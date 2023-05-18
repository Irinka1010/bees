import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import { Section } from './SharedLayout.styled';

export default function SharedLayout() {
	return (
		<>
			<NavBar />
			<main>
				<Section>
					<Container>
						<Outlet />
					</Container>
				</Section>
			</main>
			<footer></footer>
		</>
	);
}
