import * as React from "react";

import { AnimeCardComponent } from "./anime-card.component";
import { AnimeSerie } from "../anime-list/anime-list.types";
import { useModal } from "toolbox";

type AnimeCardContainerProps = {
	animeSerie: AnimeSerie;
	refElement: ((node: HTMLDivElement) => void) | null;
};

export const AnimeCardContainer: React.FC<AnimeCardContainerProps> = ({
	animeSerie,
	refElement,
}) => {
	const { isOpen, toggle } = useModal();

	return (
		<AnimeCardComponent
			refElement={refElement}
			animeSerie={animeSerie}
			toggleModal={toggle}
			isModalOpen={isOpen}
		/>
	);
};
