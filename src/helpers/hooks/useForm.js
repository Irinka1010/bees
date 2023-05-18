import { useState } from 'react';

export default function useForm({ initialState, onSubmit }) {
	const [state, setState] = useState({ ...initialState });
	const [validated, setValidated] = useState(false);

	const handleChange = ({ target }) => {
		const { value, name, type, checked } = target;
		const newValue = type === 'checkbox' ? checked : value;
		setState(prevState => ({
			...prevState,
			[name]: newValue,
		}));
		setValidated(true);
	};

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit({ ...state });
		setState({ ...initialState });
	};

	return { state, setState, handleChange, handleSubmit, validated };
}
