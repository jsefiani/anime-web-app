import { AnimeSerie } from "../anime-list/anime-list.types";

export type AnimeCardComponentProps = {
	animeSerie: AnimeSerie;
	toggleModal: () => void;
	isModalOpen: boolean;
};

export type AnimeCardRefProp = HTMLDivElement | null;

export type AnimeCardContainerProps = {
	animeSerie: AnimeSerie;
};
