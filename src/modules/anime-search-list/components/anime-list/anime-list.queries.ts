import { gql } from "apollo-boost";

export const FETCH_ANIME_SERIES = gql`
	query fetchAnimeSeries($page: Int, $perPage: Int, $search: String) {
		Page(page: $page, perPage: $perPage) {
			media(isAdult: false, sort: POPULARITY_DESC, search: $search) {
				id
				title {
					english
				}
				coverImage {
					large
				}
			}
			pageInfo {
				currentPage
				hasNextPage
				total
			}
		}
	}
`;
