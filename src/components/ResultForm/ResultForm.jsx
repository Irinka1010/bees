import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Forms, ListImage, Image, WrapperButton } from './ResultForm.styles';
// import useForm from '../../helpers/hooks/useForm';
import ReactStars from 'react-rating-stars-component';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Price from './Price/Price';

import Button from '../shared/Button';
import Producer from './Producer/Producer';
import TypeBee from './TypeBee/TypeBee';
const speciesBees = [
	{ title: 'Большая индийская пчела' },
	{ title: 'Медоносная пчелa' },
	{ title: 'Индийская пчела' },
	{ title: 'Арликовая пчела' },
];
// const initialState = {
// 	typeBees: [],
// 	abdomenBee: [],
// 	image: '',
// 	producer: [],
// 	price: '',
// };
const ResultForm = ({ galiiery }) => {
	// const { state, handleChange, handleSubmit, setState } = useForm({
	// 	initialState,
	// 	onSubmit,
	// });
	// const { typeBees, abdomenBee, image } = state;
	// const ratingChanged = rating => {
	// 	setState({ ...state, rating });
	// };
	const ratingSettings = {
		size: 35,
		isHalf: true,
		color: 'rgba(222, 231, 228, 0.379)',
		activeColor: '#4b4530',
	};
	return (
		<>
			<Forms>
				<Row as="ul" md={2} sm={1}>
					<Col as="li" className={'p-4'}>
						<h2 className="subtitle">Цена</h2>
						<Price />
					</Col>
					<Col as="li" className={'p-4'}>
						<h2 className="subtitle">Вид пчел</h2>
						<TypeBee />
					</Col>
					<Col as="li" className={'p-4'}>
						<h2 className="subtitle">Рейтинг пчел</h2>
						<ReactStars {...ratingSettings} />
					</Col>
					<Col as="li" className={'p-4'}>
						<h2 className="subtitle">Выбрать производителя</h2>
						<Producer />
					</Col>
					<Col as="li" className={'p-4'}>
						<h2 className="subtitle">Волосатость брюшка пчелы</h2>
						<Autocomplete
							className="input-multiple"
							multiple
							id="tags-outlined"
							options={speciesBees}
							getOptionLabel={option => option.title}
							defaultValue={[speciesBees[0]]}
							filterSelectedOptions
							renderInput={params => <TextField {...params} />}
							name="abdomenBee"
						/>
					</Col>
					<Col as="li" className={'p-4'}>
						<h2 className="subtitle">Выбрать тип одежды</h2>
						<ListImage>
							{galiiery.map((image, i) => (
								<li key={i} className="item">
									<Image style={{ backgroundImage: `url(${image})` }} onClick={() => {}}></Image>
								</li>
							))}
						</ListImage>
					</Col>
					<Col as="li" className={'p-4'}>
						<WrapperButton>
							<Button text={'Записать'} type={'submit'} />
							<Button text={'Сбросить'} type={'reset'} />
						</WrapperButton>
					</Col>
				</Row>
			</Forms>
		</>
	);
};
export default ResultForm;
