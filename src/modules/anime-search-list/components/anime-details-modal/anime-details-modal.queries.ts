import { gql } from "apollo-boost";

export const FETCH_ANIME_SERIE = gql`
	query fetchAnimeSerie($id: Int) {
		Media(id: $id) {
			id
			title {
				english
			}
			coverImage {
				extraLarge
			}
			genres
			episodes
		}
	}
`;
