import * as React from "react";

import { AnimeListComponentProps } from "./anime-list.types";
import { Placeholder } from "toolbox";
import {
	AnimeListWrapper,
	AnimePlaceholderCard,
	AnimeListTitle,
} from "./anime-list.styles";
import { AnimeCardContainer } from "../anime-card/anime-card.container";

export const AnimeListComponent: React.FC<AnimeListComponentProps> = ({
	series,
	isLoading,
	error,
	hasNextPage,
	setPageNumber,
	totalAnimeSeries,
	noResultsFound,
}) => {
	const observer = React.useRef<IntersectionObserver | null>();

	const lastAnimeElementRef = React.useCallback(
		(node: HTMLDivElement) => {
			if (isLoading) return;
			if (observer.current) {
				observer.current.disconnect();
			}

			observer.current = new IntersectionObserver(([entry]) => {
				if (entry?.isIntersecting && hasNextPage) {
					setPageNumber((prevPageNumber) => prevPageNumber + 1);
				}
			});

			if (node) {
				observer.current?.observe(node);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[isLoading]
	);

	const renderPlaceHolderCards = () => {
		const nodes = [];
		for (let i = 0; i < 20; i++) {
			nodes.push(
				<AnimePlaceholderCard key={i}>
					<Placeholder variant="rect" width={185} height={265} />
					<Placeholder height={20} width="80%" style={{ marginTop: 16 }} />
				</AnimePlaceholderCard>
			);
		}
		return nodes;
	};

	return (
		<>
			<AnimeListWrapper>
				<AnimeListTitle>
					{!!totalAnimeSeries ? `${totalAnimeSeries} Results` : "Popular Anime"}
				</AnimeListTitle>
				{series.map((s, i) => (
					<AnimeCardContainer
						key={s.id}
						ref={series.length === i + 1 ? lastAnimeElementRef : null}
						animeSerie={s}
					/>
				))}
				{noResultsFound && <p>No results found.</p>}
				{isLoading && renderPlaceHolderCards()}
				<div>{error && "Error"}</div>
			</AnimeListWrapper>
		</>
	);
};
