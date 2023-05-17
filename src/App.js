import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ResultForm from './components/NavBar/ResultForm/ResultForm';
import galiiery from './gallery.json';
function App() {
	return (
		<>
			<NavBar />
			<ResultForm galiiery={galiiery} />
		</>
	);
}

export default App;
