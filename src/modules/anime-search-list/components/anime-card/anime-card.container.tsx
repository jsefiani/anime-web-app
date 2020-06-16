import * as React from "react";

import { AnimeCardComponent } from "./anime-card.component";
import { useModal } from "toolbox";
import { AnimeCardRefProp, AnimeCardContainerProps } from "./anime-card.types";

export const AnimeCardContainer = React.forwardRef<
	AnimeCardRefProp,
	AnimeCardContainerProps
>(({ animeSerie }, ref) => {
	const { isOpen, toggle } = useModal();

	return (
		<AnimeCardComponent
			ref={ref}
			animeSerie={animeSerie}
			toggleModal={toggle}
			isModalOpen={isOpen}
		/>
	);
});
