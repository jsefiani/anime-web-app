import { ApolloError } from "apollo-boost";

export type AnimeDetailsModalContainerProps = {
	isOpen: boolean;
	handleClose: () => void;
	animeId: number;
};

export type AnimeDetailsModalComponentProps = {
	isOpen: boolean;
	handleClose: () => void;
	animeSerie: AnimeSerie | null;
	isLoading: boolean;
	error: ApolloError | undefined;
};

export type AnimeSerie = {
	id: number;
	title: { english: string };
	genres: string[];
	averageScore: number;
	episodes: number;
	coverImage: {
		extraLarge: string;
	};
};

export type AnimeSerieQueryResult = {
	Media: AnimeSerie;
};

export type AnimeSerieQueryVariables = {
	id: number;
};
