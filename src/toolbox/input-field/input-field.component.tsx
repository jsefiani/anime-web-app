import * as React from "react";

import { withFormLabel } from "../form-label/form-label.component";
import { makeStyles, createStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			position: "absolute",
			bottom: -20,
		},
		label: {
			position: "absolute",
		},
	})
);

type InputProps = {
	name: string;
	label: string;
	placeholder: string;
	hasError: boolean;
	errorMessage: string | undefined | React.ReactElement;
	disabled?: boolean;
	/** Determines whether the input is editable or read-only */
	mode?: "read" | "edit";
	inputRef: (
		ref: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null
	) => void;
	type: "text";
};

const Input: React.FC<InputProps> = ({
	name,
	placeholder,
	hasError,
	errorMessage,
	disabled = false,
	mode = "read",
	inputRef,
	type = "text",
}) => {
	const classes = useStyles();

	return (
		<TextField
			id={name}
			disabled={disabled || mode === "read"}
			type={type}
			autoComplete="off"
			placeholder={placeholder}
			margin="dense"
			variant="outlined"
			name={name}
			error={hasError}
			InputLabelProps={{ shrink: false, className: classes.label }}
			helperText={errorMessage}
			FormHelperTextProps={{
				className: classes.root,
			}}
			inputRef={inputRef}
		/>
	);
};

export const InputField = withFormLabel(Input);
