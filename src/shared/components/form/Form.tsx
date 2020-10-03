import * as React from "react";
import {
	useForm as useReactHookForm,
	UseFormOptions,
	FieldValues,
} from "react-hook-form";

type UseFormProps<T> = UseFormOptions & { defaultValues: T };

type FormModes = "read" | "edit";

export const useForm = <T extends FieldValues>({
	mode = "onBlur",
	reValidateMode = "onChange",
	defaultValues,
}: UseFormProps<T>) => {
	const [formMode, setFormMode] = React.useState<FormModes>("read");
	const { register, errors, reset, handleSubmit, formState } = useReactHookForm<
		T
	>({
		mode,
		reValidateMode,
		defaultValues,
	});

	const setEditMode = () => {
		setFormMode("edit");
	};

	const setReadMode = () => {
		reset();
		setFormMode("read");
	};

	return {
		register,
		errors,
		reset,
		handleSubmit,
		setEditMode,
		setReadMode,
		formMode,
		formState,
	};
};

type InjectedFormProps = {
	setReadMode: () => void;
	setEditMode: () => void;
	mode: FormModes;
};

type FormProps = {
	children(props: InjectedFormProps): JSX.Element;
	onSubmit: () => void | Promise<void>;
	style?: React.CSSProperties;
	className?: string;
	mode: FormModes;
	setReadMode: () => void;
	setEditMode: () => void;
};

export const Form: React.FC<FormProps> = ({
	children,
	onSubmit,
	style,
	className,
	mode = "read",
	setReadMode,
	setEditMode,
}) => {
	return (
		<form style={style} className={className} onSubmit={onSubmit}>
			{children && children({ setReadMode, setEditMode, mode })}
		</form>
	);
};
