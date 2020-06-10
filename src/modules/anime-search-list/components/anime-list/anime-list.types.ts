import { ApolloError } from "apollo-boost";

export type AnimeSerie = {
	title: { english: string };
	id: number;
	coverImage: { large: string };
};

export type AnimeListComponentProps = {
	series: AnimeSerie[];
	isLoading: boolean;
	error: ApolloError | undefined;
	hasNextPage: boolean;
	setPageNumber: React.Dispatch<React.SetStateAction<number>>;
	totalAnimeSeries: number;
	noResultsFound: boolean;
};

export type AnimeListQueryVariables = {
	/** Page number */
	page?: number;
	/** Number of results per page */
	perPage?: number;
	/** Search query  */
	search?: string | null | undefined;
};

export type PageInfo = {
	currentPage: number;
	hasNextPage: boolean;
	total: number;
};

export type Page = {
	media: AnimeSerie[];
	pageInfo: PageInfo;
};

export type Data = {
	Page: Page;
};
