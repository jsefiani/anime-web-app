import * as React from "react";
import { Skeleton, SkeletonProps } from "@material-ui/lab";
import styled from "styled-components";

type PlaceholderProps = SkeletonProps & {
	style?: React.CSSProperties;
	className?: string;
};

const PlaceholderWrapper = styled.div`
	border-radius: 4px;
`;

export const Placeholder: React.FC<PlaceholderProps> = ({
	animation,
	height,
	style,
	variant,
	width,
	className,
}) => {
	return (
		<PlaceholderWrapper
			as={Skeleton}
			animation={animation}
			height={height}
			width={width}
			variant={variant}
			className={className}
			style={style}
		/>
	);
};
