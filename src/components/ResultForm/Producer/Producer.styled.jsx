import styled from 'styled-components';
export const Checkbox = styled.ul`
	.custom-checkbox {
		position: absolute;
		z-index: -1;
		opacity: 0;
	}
	.custom-checkbox + label {
		display: inline-flex;
		align-items: center;
		user-select: none;
		cursor: pointer;
	}
	.custom-checkbox + label::before {
		content: '';
		display: inline-block;
		width: 1.3em;
		height: 1.3em;
		flex-shrink: 0;
		flex-grow: 0;
		border: 1px solid #e5e5f8;
		background-color: #e5e5f8;
		border-radius: 0.9em;
		margin-right: 0.5em;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 50% 50%;
	}
	.custom-checkbox:checked + label::before {
		border-color: #ffff;
		background-color: #ffff;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23000' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
	}
	.custom-checkbox:disabled + label::before {
		background-color: rgb(102, 88, 34, 0.1);
		border-color: rgb(102, 88, 34, 0.1);
		color: rgb(102, 88, 34, 0.2);
	}
	.custom-checkbox:focus:not(:checked) + label::before {
		border-color: #80bdff;
	}
`;
