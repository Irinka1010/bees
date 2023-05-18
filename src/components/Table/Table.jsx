import React from 'react';
import { Section, Title, WrapperTablet } from './Table.styled';
import { Container } from 'react-bootstrap';
import galiiery from '../../gallery.json';
import ItemTablet from './ItemTablet/ItemTablet';
const Table = () => {
	return (
		<Section>
			<Container>
				<Title>Таблица данных</Title>
				<WrapperTablet>
					<ItemTablet galiiery={galiiery} />
				</WrapperTablet>
			</Container>
		</Section>
	);
};
export default Table;
