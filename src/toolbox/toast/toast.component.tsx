import { useSnackbar, OptionsObject as NotiStackOptions } from "notistack";

export const useToast = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const openToast = (message: string, options: NotiStackOptions) => {
		enqueueSnackbar(message, options);
	};

	const closeToast = () => {
		closeSnackbar();
	};

	return {
		openToast,
		closeToast,
	};
};
