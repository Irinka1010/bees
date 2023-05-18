import React from 'react';

import { Routes, Route } from 'react-router-dom';

import DataTable from './pages/DataTable';
import SharedLayout from './components/SharedLayout/SharedLayout';
import FormHome from './pages/FormHome';
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<FormHome />} />
					<Route path="/table" element={<DataTable />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
