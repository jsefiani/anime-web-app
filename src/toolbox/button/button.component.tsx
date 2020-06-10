import * as React from "react";
import {
	Button as MuiButton,
	ButtonProps as MuiButtonProps,
} from "@material-ui/core";

type ButtonProps = MuiButtonProps & {};

export const Button: React.FC<ButtonProps> = ({
	children,
	color,
	variant,
	onClick,
	type = "button",
}) => {
	return (
		<MuiButton color={color} type={type} variant={variant} onClick={onClick}>
			{children}
		</MuiButton>
	);
};
