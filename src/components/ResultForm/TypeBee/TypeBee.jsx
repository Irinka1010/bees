import React from 'react';
import { WrapperForm } from './TypeBee.styled';
import Checkbox from '@mui/material/Checkbox';

import FormControlLabel from '@mui/material/FormControlLabel';

const TypeBee = () => {
	return (
		<WrapperForm>
			<FormControlLabel
				value="Большая индийская пчела"
				name="typeBees"
				control={<Checkbox color="default" />}
				label="Большая индийская пчела"
				labelPlacement="end"
				disabled
				// onChange={handleChange}
			/>
			<FormControlLabel
				value="Медоносная пчела"
				control={<Checkbox color="default" />}
				label="Медоносная пчела"
				labelPlacement="end"
				disabled
				name="typeBees"
				// onChange={handleChange}
			/>
			<FormControlLabel
				value="Индийская пчела"
				// onChange={handleChange}
				name="typeBees"
				control={<Checkbox color="default" />}
				label="Индийская пчела"
				labelPlacement="end"
			/>
			<FormControlLabel
				value="Арликовая пчела"
				// onChange={handleChange}
				name="typeBees"
				control={<Checkbox color="default" />}
				label="Арликовая пчела"
				labelPlacement="end"
			/>
		</WrapperForm>
	);
};
export default TypeBee;
