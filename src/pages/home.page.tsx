import * as React from "react";

import { AnimeSearchListModule } from "modules/anime-search-list";
import { AnimeLayoutModule } from "modules/anime-layout";

export const HomePage = () => {
	return (
		<AnimeLayoutModule>
			<AnimeSearchListModule />
		</AnimeLayoutModule>
	);
};
