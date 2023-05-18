import React from 'react';
import { WrapperTablet } from './Table.styled';

import galiiery from '../../gallery.json';
import ItemTablet from './ItemTablet';
const Table = () => {
	return (
		<WrapperTablet>
			<ItemTablet galiiery={galiiery} />
		</WrapperTablet>
	);
};
export default Table;
