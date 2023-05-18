import React from 'react';
import { Checkbox } from './Producer.styled';
const Producer = () => {
	// const { producer } = state;
	// console.log(producer);
	return (
		<Checkbox>
			<li>
				<input
					type="checkbox"
					className="custom-checkbox"
					id="producer1"
					name="producer"
					disabled
					// onChange={onChange}
					value="SONY"
				/>

				<label for="producer1">SONY. make.believe</label>
			</li>
			<li>
				<input
					type="checkbox"
					className="custom-checkbox"
					id="producer2"
					name="producer"
					// onChange={onChange}
					value="Panasonic"
				/>
				<label for="producer2">
					Panasonic.
					<small>ideas for life</small>
				</label>
			</li>
			<li>
				<input
					type="checkbox"
					className="custom-checkbox"
					id="producer3"
					name="producer"
					// onChange={onChange}
					value="SONY1"
				/>
				<label for="producer3">
					SONY.
					<small>make.believe</small>
				</label>
			</li>
		</Checkbox>
	);
};
export default Producer;
