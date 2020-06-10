import { AnimeSerie } from "../anime-list/anime-list.types";

export type AnimeCardComponentProps = {
	animeSerie: AnimeSerie;
	refElement: ((node: HTMLDivElement) => void) | null;
	toggleModal: () => void;
	isModalOpen: boolean;
};
