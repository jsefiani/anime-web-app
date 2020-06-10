import * as React from "react";

import { Form, InputField, Divider, Button, useForm } from "toolbox";
import { emailRegex } from "utils/validators";
import {
	AnimeUser,
	AnimeAccountDetailsFormComponentProps,
} from "./anime-account-details-form.types";
import {
	AnimeProfileFormWrapper,
	FormButtonsWrapper,
} from "./anime-account-details-form.styles";

export const AnimeAccountDetailsFormComponent: React.FC<AnimeAccountDetailsFormComponentProps> = ({
	saveUserProfile,
	deleteUserProfile,
}) => {
	const {
		handleSubmit,
		register,
		errors,
		formMode,
		setEditMode,
		setReadMode,
	} = useForm<AnimeUser>({
		defaultValues: {
			// TODO: Replace hardcoded values with incoming data from container component
			name: "Jawad Sefiani",
			emailAddress: "jawad.sefiani@hotmail.com",
		},
	});

	return (
		<AnimeProfileFormWrapper>
			<Form
				onSubmit={handleSubmit(saveUserProfile)}
				mode={formMode}
				setEditMode={setEditMode}
				setReadMode={setReadMode}
			>
				{({ setEditMode, setReadMode, mode }) => (
					<>
						<InputField
							name="name"
							label="Name"
							placeholder="Name"
							hasError={!!errors.name}
							errorMessage={errors.name?.message}
							inputRef={register({
								required: { value: true, message: "Name is required." },
							})}
							mode={formMode}
							type="text"
						/>
						<InputField
							name="emailAddress"
							label="Email Address"
							placeholder="Email Address"
							hasError={!!errors.emailAddress}
							errorMessage={errors.emailAddress?.message}
							inputRef={register({
								required: {
									value: true,
									message: "Email Address is required.",
								},
								pattern: {
									value: emailRegex,
									message: "Email Address must be valid.",
								},
							})}
							mode={formMode}
							type="text"
						/>
						<FormButtonsWrapper>
							{mode === "edit" && (
								<>
									<div style={{ marginRight: 10 }}>
										<Button type="submit" variant="contained" color="primary">
											Save
										</Button>
									</div>
									<Button
										variant="contained"
										color="default"
										onClick={setReadMode}
									>
										Cancel
									</Button>
								</>
							)}
							{mode === "read" && (
								<Button
									variant="contained"
									color="primary"
									onClick={setEditMode}
								>
									Edit
								</Button>
							)}
						</FormButtonsWrapper>
					</>
				)}
			</Form>
			<Divider />
			{/* For now the user ID is hardcoded but this should be dynamically set as this data should come from the container component*/}
			<Button onClick={() => deleteUserProfile(12)}>Delete your account</Button>
		</AnimeProfileFormWrapper>
	);
};
