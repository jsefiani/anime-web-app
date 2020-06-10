import * as React from "react";

import { AnimeDetailsModalComponent } from "./anime-details-modal.component";
import {
	AnimeDetailsModalContainerProps,
	AnimeSerieQueryVariables,
	AnimeSerieQueryResult,
	AnimeSerie,
} from "./anime-details-modal.types";
import { FETCH_ANIME_SERIE } from "./anime-details-modal.queries";
import { useLazyQuery } from "@apollo/react-hooks";

export const AnimeDetailsModalContainer: React.FC<AnimeDetailsModalContainerProps> = ({
	isOpen,
	handleClose,
	animeId,
}) => {
	const [animeSerie, setAnimeSerie] = React.useState<AnimeSerie | null>(null);
	const [fetchAnimeSerie, { loading, error }] = useLazyQuery<
		AnimeSerieQueryResult,
		AnimeSerieQueryVariables
	>(FETCH_ANIME_SERIE, {
		onCompleted: (data) => {
			setAnimeSerie(data.Media);
		},
	});

	React.useEffect(() => {
		fetchAnimeSerie({ variables: { id: animeId } });
	}, []);

	return (
		<AnimeDetailsModalComponent
			isOpen={isOpen}
			isLoading={loading}
			handleClose={handleClose}
			animeSerie={animeSerie}
			error={error}
		/>
	);
};
