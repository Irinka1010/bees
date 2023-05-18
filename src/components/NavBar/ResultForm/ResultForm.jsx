import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
	Title,
	Section,
	Forms,
	WrapperForm,
	ListImage,
	Image,
	WrapperButton,
} from './ResultForm.styles';
import useForm from '../../../helpers/hooks/useForm';
import ReactStars from 'react-rating-stars-component';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Price from './Price/Price';
import Checkbox from '@mui/material/Checkbox';

import FormControlLabel from '@mui/material/FormControlLabel';
import Button from './Button/Button';
import Producer from './Producer/Producer';
const speciesBees = [
	{ title: 'Большая индийская пчела' },
	{ title: 'Медоносная пчелa' },
	{ title: 'Индийская пчела' },
	{ title: 'Арликовая пчела' },
];
const initialState = {
	typeBees: [],
	abdomenBee: [],
	image: '',
	producer: [],
	price: '',
};
const ResultForm = ({ galiiery, onSubmit }) => {
	const { state, handleChange, handleSubmit, setState } = useForm({
		initialState,
		onSubmit,
	});
	// const { typeBees, abdomenBee, image } = state;
	const ratingChanged = rating => {
		setState({ ...state, rating });
	};
	const ratingSettings = {
		size: 35,
		isHalf: true,
		color: 'rgba(222, 231, 228, 0.379)',
		activeColor: '#4b4530',
	};
	return (
		<Section>
			<Container>
				<Title>Фильтр результатов</Title>
				<Forms onSubmit={handleSubmit}>
					<Row as="ul" md={2} sm={1}>
						<Col as="li" className={'p-4'}>
							<h2 className="subtitle">Цена</h2>
							<Price onChange={handleChange} state={state} />
						</Col>
						<Col as="li" className={'p-4'}>
							<h2 className="subtitle">Вид пчел</h2>
							<WrapperForm>
								<FormControlLabel
									value="Большая индийская пчела"
									name="typeBees"
									control={<Checkbox color="default" />}
									label="Большая индийская пчела"
									labelPlacement="end"
									disabled
									onChange={handleChange}
								/>
								<FormControlLabel
									value="Медоносная пчела"
									control={<Checkbox color="default" />}
									label="Медоносная пчела"
									labelPlacement="end"
									disabled
									name="typeBees"
									onChange={handleChange}
								/>
								<FormControlLabel
									value="Индийская пчела"
									onChange={handleChange}
									name="typeBees"
									control={<Checkbox color="default" />}
									label="Индийская пчела"
									labelPlacement="end"
								/>
								<FormControlLabel
									value="Арликовая пчела"
									onChange={handleChange}
									name="typeBees"
									control={<Checkbox color="default" />}
									label="Арликовая пчела"
									labelPlacement="end"
								/>
							</WrapperForm>
						</Col>
						<Col as="li" className={'p-4'}>
							<h2 className="subtitle">Рейтинг пчел</h2>
							<ReactStars {...ratingSettings} onChange={ratingChanged} />
						</Col>
						<Col as="li" className={'p-4'}>
							<h2 className="subtitle">Выбрать производителя</h2>
							<Producer onChange={handleChange} state={state} />
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
								onChange={handleChange}
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
			</Container>
		</Section>
	);
};
export default ResultForm;
