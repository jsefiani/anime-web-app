import * as React from "react";
import styled from "styled-components";

import { LazyImage } from "shared/components";
import { AnimeDetailsModalContainer } from "../containers";
import { AnimeSerie } from "pages/home/common/types";

type AnimeCardRefProp = HTMLDivElement | null;

type AnimeCardProps = {
  animeSerie: AnimeSerie;
  toggleModal: () => void;
  isModalOpen: boolean;
};

export const AnimeCard = React.forwardRef<AnimeCardRefProp, AnimeCardProps>(
  ({ animeSerie, toggleModal, isModalOpen }, ref) => {
    return (
      <>
        {isModalOpen && (
          <AnimeDetailsModalContainer
            isOpen={isModalOpen}
            handleClose={toggleModal}
            animeId={animeSerie.id}
          />
        )}
        <AnimeCardWrapper ref={ref} onClick={toggleModal}>
          <AnimeCardImageWrapper
            as={LazyImage}
            height={265}
            src={animeSerie.coverImage.large}
            title={`Thumbnail: ${animeSerie.title.english}`}
          />
          <p>{animeSerie.title.english || "No title provided"}</p>
        </AnimeCardWrapper>
      </>
    );
  }
);

const AnimeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in;
  margin-bottom: 10px;

  :hover {
    opacity: 0.8;
    cursor: pointer;
    transform: translateY(-5px);
  }
`;

const AnimeCardImageWrapper = styled.img`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
