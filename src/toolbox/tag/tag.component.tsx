import * as React from "react";
import { Chip, ChipProps } from "@material-ui/core";

type TagProps = ChipProps & {};

export const Tag: React.FC<TagProps> = ({ label }) => {
	return <Chip label={label} />;
};
