import * as React from "react";
import { ApolloError } from "apollo-boost";
import styled from "styled-components";

import { Placeholder } from "shared/components";
import { AnimeCardContainer } from "../containers";
import { AnimeSerie } from "pages/home/common/types";

export type AnimeListProps = {
  series: AnimeSerie[];
  isLoading: boolean;
  error: ApolloError | undefined;
  hasNextPage: boolean;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  totalAnimeSeries: number;
  noResultsFound: boolean;
};

export const AnimeList: React.FC<AnimeListProps> = ({
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

export const AnimeListWrapper = styled.div`
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
