import * as React from "react";
import { gql } from "apollo-boost";

import { AnimeDetailsModal } from "../components";
import { useLazyQuery } from "@apollo/react-hooks";
import { AnimeSerie } from "pages/home/common/types";

type AnimeSerieQueryResult = {
  Media: AnimeSerie;
};

type AnimeSerieQueryVariables = {
  id: number;
};

type AnimeDetailsModalContainerProps = {
  isOpen: boolean;
  handleClose: () => void;
  animeId: number;
};

const FETCH_ANIME_SERIE = gql`
  query fetchAnimeSerie($id: Int) {
    Media(id: $id) {
      id
      title {
        english
      }
      coverImage {
        extraLarge
      }
      genres
      episodes
    }
  }
`;

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
  }, [fetchAnimeSerie, animeId]);

  return (
    <AnimeDetailsModal
      isOpen={isOpen}
      isLoading={loading}
      handleClose={handleClose}
      animeSerie={animeSerie}
      error={error}
    />
  );
};
