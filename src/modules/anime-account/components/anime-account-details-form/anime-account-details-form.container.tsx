import * as React from "react";
import { AnimeAccountDetailsFormComponent } from "./anime-account-details-form.component";

import { useToast } from "toolbox";
import { AnimeUser } from "./anime-account-details-form.types";

// TODO: Query user's info and pass it along to the presentational component
export const AnimeAccountDetailsFormContainer = () => {
	const { openToast } = useToast();

	const saveUserProfile = async (user: AnimeUser) => {
		try {
			// Do some business logic...
			await new Promise((resolve, reject) =>
				setTimeout(() => {
					reject();
				}, 500)
			);
		} catch {
			openToast("Oops... Something went wrong.", { variant: "error" });
		}
	};

	const deleteUserProfile = async (id: number) => {
		// TODO: Ask for confirmation before attempting to delete the account
		try {
			// Do some business logic...
			await new Promise((resolve, reject) =>
				setTimeout(() => {
					reject();
				}, 500)
			);
		} catch {
			openToast("Oops... Something went wrong.", { variant: "error" });
		}
	};
	return (
		<AnimeAccountDetailsFormComponent
			saveUserProfile={saveUserProfile}
			deleteUserProfile={deleteUserProfile}
		/>
	);
};
