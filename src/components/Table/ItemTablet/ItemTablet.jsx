import React from 'react';
import { CapTablet, BoxTablet } from './ItemTablet.styled';
import { useState } from 'react';
import { BsPlusLg, BsDashLg } from 'react-icons/bs';
const ItemTablet = ({ galiiery }) => {
	const [isTableOpen, setIsTableOpen] = useState(false);
	const toggleTable = () => setIsTableOpen(isOpen => !isOpen);
	const image = galiiery[0];
	return (
		<BoxTablet>
			<CapTablet>
				<button type="button" className="tablet-button" onClick={toggleTable}>
					{isTableOpen ? <BsDashLg className="svg-button" /> : <BsPlusLg className="svg-button" />}
					№125548
				</button>
				<p>12.03.2022</p>
			</CapTablet>
			{isTableOpen && (
				<table className="resp-tab">
					<thead>
						<tr>
							<th>Вид пчел</th>
							<th>Волосатость брюшка пчелы</th>
							<th>Одежда</th>
							<th>Цена</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<span>Вид пчел</span>Индийская пчела
							</td>
							<td>
								<span>Волосатость брюшка пчелы</span>Индийская пчела
							</td>
							<td>
								<span>Одежда</span> <img src={image} alt="Одежда" className="img-table" />
							</td>
							<td>
								<span>Цена</span>70 $
							</td>
						</tr>
						<tr>
							<td>
								<span>Вид пчел</span>Арликовая пчела
							</td>
							<td>
								<span>Волосатость брюшка пчелы</span>Арликовая пчела
							</td>
							<td>
								<span>Одежда</span>
								<img src={image} alt="Одежда" className="img-table" />
							</td>
							<td>
								<span>Цена</span>100 $
							</td>
						</tr>
					</tbody>
				</table>
			)}
		</BoxTablet>
	);
};
export default ItemTablet;
