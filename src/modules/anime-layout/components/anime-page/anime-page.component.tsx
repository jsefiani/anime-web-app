import * as React from "react";
import styled from "styled-components";

type AnimePageProps = {
	children: React.ReactNode;
};

const AnimePageWrapper = styled.div`
	margin: auto;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	min-height: 110vh;
`;

export const AnimePage: React.FC<AnimePageProps> = ({ children }) => {
	return <AnimePageWrapper>{children}</AnimePageWrapper>;
};
