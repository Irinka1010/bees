import React from 'react';
import { useState } from 'react';
import ResultForm from '../components/ResultForm';
import galiiery from '../gallery.json';
import { nanoid } from 'nanoid';
import Title from '../components/shared/Title/Title';
const FormHome = () => {
	const [datas, setData] = useState([]);
	const onSubmitForm = data => {
		setData(prev => {
			const newData = {
				id: nanoid(),
				...data,
			};
			return [...prev, newData];
		});
		console.log(datas);
	};
	return (
		<>
			<Title text="Фильтр результатов" />

			<ResultForm galiiery={galiiery} onSubmit={onSubmitForm} />
		</>
	);
};
export default FormHome;
