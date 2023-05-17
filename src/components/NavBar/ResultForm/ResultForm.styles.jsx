import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const Section = styled.section`
	padding: 60px 0 60px;
`;
export const Title = styled.h1``;
export const Forms = styled(Form)`
	.subtitle {
		color: #665822;
		font-size: 24px;
		margin-bottom: 20px;
	}
	.input-multiple {
		background-color: #ffff;
	}
`;
export const FormList = styled.ul`
	display: flex;
`;
export const WrapperForm = styled.div`
	display: grid;
`;
export const LabelRadio = styled.label`
	.input {
		/* margin-right: 15px; */
	}
	.input-wrapper {
		justify-content: center;
		align-items: center;
	}
	/* .input-tex {
		display: block;
	} */
`;
export const ListImage = styled.ul`
	display: flex;
	margin-top: 20px;
	gap: 5px;
	.item {
		padding: 5px;
		&:hover,
		&:focus {
			background-color: #feeda9;
			border-radius: 5px;
		}
	}
`;
export const Image = styled.div`
	width: 30px;
	height: 30px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 6px;
	cursor: pointer;
	box-shadow: '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)';
	transition: box-shadow 1000ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover,
	&.active {
		box-shadow: '0px 1px 1px rgba(51, 160, 255, 0.245), 0px 4px 4px rgba(51, 160, 255, 0.245), 1px 4px 6px rgba(51, 160, 255, 0.245)';
	}
	@media (min-width: 425px) {
		width: 50px;
		height: 50px;
	}
`;
export const WrapperButton = styled.div`
	display: flex;
	justify-content: space-between;
`;
