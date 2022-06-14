import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 70vh;
`;
export const Content = styled.div`
	padding: 0.5rem;
	display: flex;
	gap: 1rem;
	flex-direction: column;
	& span {
		color: #3bacb6;
		&:hover {
			color: #2f8f9d;
		}
	}
`;
