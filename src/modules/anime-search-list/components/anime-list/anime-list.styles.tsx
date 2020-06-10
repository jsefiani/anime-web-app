import styled from "styled-components";

export const AnimeListContainerStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 185px);
	grid-template-rows: auto;
	justify-content: center;
	grid-column-gap: 2%;
	transition: all 0.5s ease-in-out;
`;

export const AnimePlaceholderCard = styled.div`
	margin-bottom: 10px;
`;

export const AnimeListTitle = styled.h2`
	text-align: left;
	grid-column: 1 / 6;
	margin-bottom: 40px;
	font-size: 28px;
`;
