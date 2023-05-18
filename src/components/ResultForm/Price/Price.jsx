import React, { useState } from 'react';

import { SliderThumb } from '@mui/material/Slider';
import { AirbnbSlider } from './AirbnbSlider.styled';
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

const Price = ({ setState, state }) => {
	const [price, setPrice] = useState([0, 100]);

	const handleChange = (event, newPrice) => {
		setPrice(newPrice);
		setState({ ...state, price });
	};

	return (
		<>
			<WrapperLabel>
				<p className="text">
					oт
					<Label>
						{price[0]} <span className="label-spsn">$</span>
					</Label>
				</p>
				<p className="text">
					до
					<Label>
						{price[1]} <span className="label-spsn">$</span>
					</Label>
				</p>
			</WrapperLabel>

			<AirbnbSlider
				name="price"
				slots={{ thumb: AirbnbThumbComponent }}
				getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
				defaultValue={[0, 100]}
				onChange={handleChange}
			/>
		</>
	);
};
export default Price;
