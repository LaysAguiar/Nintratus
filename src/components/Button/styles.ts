import styled from "styled-components";

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 1.375rem;
	padding: 1.325px 5rem;
	font: 700 1.125rem "Raleway", sans-serif;
	background: #3bacb6;
	color: #efead8;
	width: 100%;
	height: 2.5rem;
	border: 2px solid transparent;
	border-radius: 4px;
	text-decoration: none;
	transition: all 0.3s;
	&:disabled {
		cursor: not-allowed;
		background: #2f8f9d;
		color: #efead8;
	}
	&:hover {
		background: #2f8f9d;
	}
`;
