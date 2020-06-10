import * as React from "react";
import styled from "styled-components";

import { SearchField } from "toolbox";

type AnimeSearchComponentProps = {
	searchQuery: string;
	handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
};

const AnimeSearchWrapper = styled.div`
	max-width: 400px;
	margin: auto;
`;

export const AnimeSearchComponent: React.FC<AnimeSearchComponentProps> = ({
	searchQuery,
	handleSearch,
	placeholder,
}) => {
	return (
		<AnimeSearchWrapper>
			<SearchField
				value={searchQuery}
				onChange={handleSearch}
				placeholder={placeholder}
			/>
		</AnimeSearchWrapper>
	);
};
