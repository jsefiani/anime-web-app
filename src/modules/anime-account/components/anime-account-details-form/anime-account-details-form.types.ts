export type AnimeUser = {
	name: string;
	emailAddress: string;
};

export type AnimeAccountDetailsFormComponentProps = {
	saveUserProfile: (user: AnimeUser) => Promise<void>;
	deleteUserProfile: (id: number) => Promise<void>;
};
