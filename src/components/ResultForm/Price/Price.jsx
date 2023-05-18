import React, { useState } from 'react';

import { SliderThumb } from '@mui/material/Slider';
import { AirbnbSlider } from './AirbnbSlider.styles';
import { Label, WrapperLabel } from './Price.styled';

function AirbnbThumbComponent(props) {
	const { children, ...other } = props;
	return (
		<SliderThumb {...other}>
			{children}
			<span className="airbnb-bar" />
			<span className="airbnb-bar" />
			<span className="airbnb-bar" />
		</SliderThumb>
	);
}

// AirbnbThumbComponent.propTypes = {
// 	children: PropTypes.node,
// };

const Price = () => {
	const [value, setValue] = useState([0, 100]);

	const handleChange = (event, newValue) => {
		setValue(newValue);

		console.log(value);
	};

	return (
		<>
			<WrapperLabel>
				<p className="text">
					oт
					<Label>
						{value[0]} <span className="label-spsn">$</span>
					</Label>
				</p>
				<p className="text">
					до
					<Label>
						{value[1]} <span className="label-spsn">$</span>
					</Label>
				</p>
			</WrapperLabel>

			<AirbnbSlider
				name="price"
				slots={{ thumb: AirbnbThumbComponent }}
				getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
				defaultValue={[0, 100]}
				// valueLabelDisplay="auto"
				onChange={handleChange}
				// getAriaValueText={minPrice}
			/>
		</>
	);
};
export default Price;
