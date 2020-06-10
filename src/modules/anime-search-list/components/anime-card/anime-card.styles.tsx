import styled from "styled-components";

export const AnimeCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	transition: all 0.2s ease-in;
	margin-bottom: 10px;

	:hover {
		opacity: 0.8;
		cursor: pointer;
		transform: translateY(-5px);
	}
`;

export const AnimeCardImageWrapper = styled.img`
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
