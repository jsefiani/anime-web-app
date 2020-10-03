import * as React from "react";
import styled from "styled-components";
import { ApolloError } from "apollo-boost";

import { AnimeSerie } from "pages/home/common/types";
import { Modal, Tag, Alert, LazyImage, Placeholder } from "shared/components";

type AnimeDetailsModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  animeSerie: AnimeSerie | null;
  isLoading: boolean;
  error: ApolloError | undefined;
};

export const AnimeDetailsModal: React.FC<AnimeDetailsModalProps> = ({
  isOpen,
  handleClose,
  animeSerie,
  isLoading,
  error,
}) => {
  const renderPlaceholder = () => {
    return (
      <AnimeModalWrapper>
        <Placeholder
          variant="rect"
          width={185}
          height={265}
          style={{ minWidth: 185 }}
        />
        <AnimeModalContentWrapper>
          <Placeholder width={30} />
          <Placeholder width={100} />
          <Placeholder width={30} />
          <Placeholder width={100} />
        </AnimeModalContentWrapper>
      </AnimeModalWrapper>
    );
  };

  return (
    <Modal open={isOpen} handleClose={handleClose}>
      {isLoading && renderPlaceholder()}
      {animeSerie && (
        <AnimeModalWrapper>
          <AnimeModalImage
            as={LazyImage}
            src={animeSerie.coverImage.extraLarge}
            title={`Thumbnail: ${animeSerie.title.english}`}
            width={185}
            height={265}
          />
          <AnimeModalContentWrapper>
            <AnimeModalContentLabel>Title</AnimeModalContentLabel>
            <p>{animeSerie?.title.english || "Not provided"}</p>
            <AnimeModalContentLabel>Episodes</AnimeModalContentLabel>
            <p>{animeSerie?.episodes || "Not provided"}</p>
            <AnimeModalContentLabel>Genres</AnimeModalContentLabel>
            <AnimeGenresWrapper>
              {animeSerie?.genres.map((g, i) => (
                <Tag key={i} label={g} />
              ))}
            </AnimeGenresWrapper>
          </AnimeModalContentWrapper>
        </AnimeModalWrapper>
      )}
      {error && <Alert severity="error">{error.message}</Alert>}
    </Modal>
  );
};

const AnimeGenresWrapper = styled.div`
  div {
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;

const AnimeModalImage = styled.img`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  min-width: 185px;
`;

const AnimeModalContentWrapper = styled.div`
  padding-top: 40px;
  padding-left: 20px;
  width: 100%;
`;

const AnimeModalWrapper = styled.div`
  display: flex;
`;

const AnimeModalContentLabel = styled.h4`
  margin: 0;
  display: inline-block;
`;
