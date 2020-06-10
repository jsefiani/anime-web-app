import * as React from "react";

import { Modal, Tag, Alert, LazyImage, Placeholder } from "toolbox";
import { AnimeDetailsModalComponentProps } from "./anime-details-modal.types";
import {
	AnimeGenresWrapper,
	AnimeModalImage,
	AnimeModalContentWrapper,
	AnimeModalWrapper,
	AnimeModalContentLabel,
} from "./anime-details-modal.styles";

export const AnimeDetailsModalComponent: React.FC<AnimeDetailsModalComponentProps> = ({
	isOpen,
	handleClose,
	animeSerie,
	isLoading,
	error,
}) => {
	const renderPlaceholder = () => {
		return (
			<AnimeModalWrapper>
				<Placeholder
					variant="rect"
					width={185}
					height={265}
					style={{ minWidth: 185 }}
				/>
				<AnimeModalContentWrapper>
					<Placeholder width={30} />
					<Placeholder width={100} />
					<Placeholder width={30} />
					<Placeholder width={100} />
				</AnimeModalContentWrapper>
			</AnimeModalWrapper>
		);
	};

	return (
		<Modal open={isOpen} handleClose={handleClose}>
			{isLoading && renderPlaceholder()}
			{animeSerie && (
				<AnimeModalWrapper>
					<AnimeModalImage
						as={LazyImage}
						src={animeSerie.coverImage.extraLarge}
						title={`Thumbnail: ${animeSerie.title.english}`}
						width={185}
						height={265}
					/>
					<AnimeModalContentWrapper>
						<AnimeModalContentLabel>Title</AnimeModalContentLabel>
						<p>{animeSerie?.title.english || "Not provided"}</p>
						<AnimeModalContentLabel>Episodes</AnimeModalContentLabel>
						<p>{animeSerie?.episodes || "Not provided"}</p>
						<AnimeModalContentLabel>Genres</AnimeModalContentLabel>
						<AnimeGenresWrapper>
							{animeSerie?.genres.map((g, i) => (
								<Tag key={i} label={g} />
							))}
						</AnimeGenresWrapper>
					</AnimeModalContentWrapper>
				</AnimeModalWrapper>
			)}
			{error && <Alert severity="error">{error.message}</Alert>}
		</Modal>
	);
};
