import * as React from "react";

import { AnimeHeader } from "./components/anime-header/anime-header.component";
import { AnimePage } from "./components/anime-page/anime-page.component";

type AnimeLayoutModuleProps = {
	children: React.ReactNode;
};

export const AnimeLayoutModule: React.FC<AnimeLayoutModuleProps> = ({
	children,
}) => {
	return (
		<AnimePage>
			<AnimeHeader />
			{children}
		</AnimePage>
	);
};
