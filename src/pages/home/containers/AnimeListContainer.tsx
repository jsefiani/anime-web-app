/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { AnimeList } from "../components";
import { useAnimeSearch } from "./AnimeSearchContainer";
import { AnimeSerie } from "pages/home/common/types";

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

const FETCH_ANIME_SERIES = gql`
  query fetchAnimeSeries($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      media(isAdult: false, sort: POPULARITY_DESC, search: $search) {
        id
        title {
          english
        }
        coverImage {
          large
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        total
      }
    }
  }
`;

// TODO: Create custom hook to encapsulate business logic
export const AnimeListContainer = () => {
  const { searchQuery, debouncedSearchQuery } = useAnimeSearch();
  const [animeSeries, setAnimeSeries] = React.useState<AnimeSerie[]>([]);
  const [totalAnimeSeries, setTotalAnimeSeries] = React.useState<number>(0);
  const [noResultsFound, setNoResultsFound] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [hasNextPage, setHasNextPage] = React.useState<boolean>(true);

  const PAGE_SIZE = 20;

  const [fetchAnimeSeries, { loading, error, fetchMore }] = useLazyQuery<
    Data,
    AnimeListQueryVariables
  >(FETCH_ANIME_SERIES, {
    variables: { page: 1, perPage: PAGE_SIZE },
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      setAnimeSeries(data.Page.media);
      if (!data.Page.media.length) {
        setNoResultsFound(true);
      }
      if (searchQuery) {
        setTotalAnimeSeries(data.Page.pageInfo.total);
      }
    },
    notifyOnNetworkStatusChange: true,
  });

  React.useEffect(() => {
    setTotalAnimeSeries(0);
    setAnimeSeries([]);
    setPageNumber(1);
    setHasNextPage(true);
    setNoResultsFound(false);
    fetchAnimeSeries({
      variables: {
        search: searchQuery ? searchQuery : null,
      },
    });
  }, [debouncedSearchQuery]);

  React.useEffect(() => {
    if (pageNumber > 1 && hasNextPage) {
      onLoadMore(pageNumber);
    }
  }, [pageNumber, hasNextPage]);

  const onLoadMore = (pageNumber: number) => {
    return fetchMore({
      variables: {
        page: pageNumber,
        search: searchQuery ? searchQuery : null,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        const newEntries = {
          ...prev,
          Page: {
            ...prev.Page,
            media: [...prev.Page.media, ...fetchMoreResult.Page.media],
          },
        };
        setHasNextPage(fetchMoreResult.Page.pageInfo.hasNextPage);
        setAnimeSeries((prevAnimeSeries) => [
          ...new Set([...prevAnimeSeries, ...newEntries.Page.media]),
        ]);
        return newEntries;
      },
    });
  };

  return (
    <AnimeList
      series={animeSeries}
      isLoading={loading}
      error={error}
      hasNextPage={hasNextPage}
      setPageNumber={setPageNumber}
      totalAnimeSeries={totalAnimeSeries}
      noResultsFound={noResultsFound}
    />
  );
};
