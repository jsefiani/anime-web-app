import * as React from "react";
import {
	Divider as MuiDivider,
	DividerProps as MuiDividerProps,
} from "@material-ui/core";
import styled from "styled-components";

type DividerProps = MuiDividerProps & {};

const DividerWrapper = styled.div`
	margin: 30px 0;
`;

export const Divider: React.FC<DividerProps> = ({ variant, light }) => (
	<DividerWrapper>
		<MuiDivider variant={variant} light={light} />
	</DividerWrapper>
);
