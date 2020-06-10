import * as React from "react";
import { Dialog, DialogProps } from "@material-ui/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { Icon } from "../icon/icon.components";

const ModalHeaderWrapper = styled.div`
	position: relative;
`;

const IconWrapper = styled.svg`
	position: absolute;
	right: 20px;
	top: 15px;

	&:hover {
		cursor: pointer;
	}
`;

type ModalProps = DialogProps & {
	children: React.ReactNode;
	handleClose: () => void;
	title?: string;
};

export const useModal = () => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	const toggle = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	return {
		isOpen,
		toggle,
	};
};

export const Modal: React.FC<ModalProps> = ({
	children,
	open,
	handleClose,
	title,
	maxWidth,
	style,
	className,
}) => {
	return (
		<Dialog
			fullWidth
			maxWidth={maxWidth}
			open={open}
			onClose={handleClose}
			style={style}
			className={className}
			BackdropProps={{ style: { backgroundColor: "rgba(255,255,255,.8)" } }}
		>
			<ModalHeaderWrapper>
				{title}
				<IconWrapper as={Icon} icon={faTimes} size="lg" onClick={handleClose} />
			</ModalHeaderWrapper>
			{children}
		</Dialog>
	);
};
