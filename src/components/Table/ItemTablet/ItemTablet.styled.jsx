import styled from 'styled-components';
export const CapTablet = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	background-color: #a38c34;
	color: #ffffff;

	.tablet-button {
		background-color: #a38c34;
		border: 0;
		cursor: position;
		.svg-button {
			margin-right: 10px;
		}
	}
`;

export const BoxTablet = styled.div`
	font-weight: 500px;
	font-size: 16px;
	padding: 5px;
	background-color: #dfc150;
	.resp-tab {
		font-weight: normal;
		border-collapse: separate;
		border: none;
		width: 100%;
		border-spacing: 7px 11px;
		max-width: 100%;
	}
	.resp-tab th,
	.resp-tab td {
		padding: 10px 20px;
		font-size: 16px;
		margin: 10px;
		border: none;
		vertical-align: top;
	}
	.resp-tab th {
		color: #fff;
		background: #665822;
		font-weight: bold;
		text-transform: uppercase;
		text-align: center;
	}
	.resp-tab tbody {
		padding: 10px 20px;
		border-spacing: 7px 11px;
		border-collapse: separate;
		background-color: #ffffff;
		color: #665822;
		@media (max-width: 768px) {
			background-color: transparent;
		}
	}
	.resp-tab td span {
		color: #fff;
		background: #665822;
		display: none;
		font-size: 11px;
		font-weight: bold;
		font-family: Verdana, sans-serif;
		text-transform: uppercase;
		padding: 5px 10px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.img-table {
		margin: auto;
		width: 30px;
		height: 30px;
	}
	@media (max-width: 768px) {
		.resp-tab thead {
			display: none;
		}
		.resp-tab tr {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			border: 1px solid #747576;
			background-color: #ffffff;
		}

		.resp-tab td {
			margin: 0 -1px -1px 0;
			padding-top: 35px;
			border-spacing: 7px 11px;
			border-collapse: separate;
			position: relative;
			border: 1px solid #747576;
			background-color: #ffffff;
			width: 50%;
		}
		.resp-tab td span {
			display: block;
		}
	}
	@media (max-width: 480px) {
		.resp-tab td {
			width: 100%;
		}
	}
`;
