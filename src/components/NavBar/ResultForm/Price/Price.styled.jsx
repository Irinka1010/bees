import styled from 'styled-components';
export const WrapperLabel = styled.div`
	display: flex;
	gap: 10px;
	margin-bottom: 20px;
	.text {
		display: flex;
		align-items: center;
	}
`;
export const Label = styled.label`
	width: 89px;
	background-color: #ffff;
	color: #000;
	padding: 2px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 5px;
	border-radius: 5px;
	@media (min-width: 992px) {
		width: 170px;
	}
	@media (min-width: 768px) {
		width: 130px;
		padding: 5px;
	}
`;
