import * as React from "react";
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

type IconProps = FontAwesomeIconProps & {};

export const Icon: React.FC<IconProps> = ({
	icon,
	size,
	onClick,
	className,
	style,
}) => {
	return (
		<FontAwesomeIcon
			className={className}
			style={style}
			icon={icon}
			size={size}
			onClick={onClick}
		/>
	);
};
