import * as React from "react";
import styled from "styled-components";

import { AnimeAccountDetailsFormContainer } from "./components/anime-account-details-form/anime-account-details-form.container";

const AnimeAccountDetailsWrapper = styled.div`
	max-width: 500px;
	margin: 0px auto;
	padding: 30px 24px;
	height: 100%;
	width: 100%;
`;

export const AnimeAccountModule = () => {
	return (
		<AnimeAccountDetailsWrapper>
			<h1>My profile</h1>
			<AnimeAccountDetailsFormContainer />
		</AnimeAccountDetailsWrapper>
	);
};
