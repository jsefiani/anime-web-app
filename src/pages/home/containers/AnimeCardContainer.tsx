import * as React from "react";

import { AnimeCard } from "../components";
import { useModal } from "shared/components";
import { AnimeSerie } from "pages/home/common/types";

type AnimeCardContainerProps = {
  animeSerie: AnimeSerie;
};

type AnimeCardRefProp = HTMLDivElement | null;

export const AnimeCardContainer = React.forwardRef<
  AnimeCardRefProp,
  AnimeCardContainerProps
>(({ animeSerie }, ref) => {
  const { isOpen, toggle } = useModal();

  return (
    <AnimeCard
      ref={ref}
      animeSerie={animeSerie}
      toggleModal={toggle}
      isModalOpen={isOpen}
    />
  );
});
