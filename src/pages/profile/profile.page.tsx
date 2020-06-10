import * as React from "react";

import { AnimeLayoutModule } from "modules/anime-layout";
import { AnimeAccountModule } from "modules/anime-account";

export const ProfilePage = () => {
	return (
		<AnimeLayoutModule>
			<AnimeAccountModule />
		</AnimeLayoutModule>
	);
};
