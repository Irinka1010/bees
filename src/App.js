import React from 'react';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ResultForm from './components/NavBar/ResultForm/ResultForm';
import galiiery from './gallery.json';
import { nanoid } from 'nanoid';
import DataTable from './pages/DataTable';
function App() {
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
			<NavBar />
			<ResultForm galiiery={galiiery} onSubmit={onSubmitForm} />
			<DataTable />
		</>
	);
}

export default App;
