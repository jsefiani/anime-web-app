import * as React from "react";
import { useDebounce } from "use-debounce/lib";

import { AnimeSearchComponent } from "./anime-search.component";

type AnimeSearchContextProps = {
	searchQuery: string;
	handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
	debouncedSearchQuery: string;
};

export const AnimeSearchContext = React.createContext<AnimeSearchContextProps>({
	searchQuery: "",
	handleSearch: () => "",
	debouncedSearchQuery: "",
});

export const AnimeSearchProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [searchQuery, setSearch] = React.useState<string>("");
	const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<AnimeSearchContext.Provider
			value={{ searchQuery, handleSearch, debouncedSearchQuery }}
		>
			{children}
		</AnimeSearchContext.Provider>
	);
};

export const useAnimeSearch = () => {
	return React.useContext(AnimeSearchContext);
};

export const AnimeSearchContainer = () => {
	const { searchQuery, handleSearch } = React.useContext(AnimeSearchContext);

	return (
		<AnimeSearchComponent
			searchQuery={searchQuery}
			handleSearch={handleSearch}
			placeholder="Search for Anime... (e.g. Naruto)"
		/>
	);
};
