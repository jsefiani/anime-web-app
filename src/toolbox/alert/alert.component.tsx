import * as React from "react";
import {
	Alert as MuiAlert,
	AlertProps as MuiAlertProps,
} from "@material-ui/lab";

type AlertProps = MuiAlertProps & {};

export const Alert: React.FC<AlertProps> = ({ severity, children }) => {
	return <MuiAlert severity={severity}>{children}</MuiAlert>;
};
