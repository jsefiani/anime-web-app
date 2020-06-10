import * as React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { Icon } from "../icon/icon.components";

export const SearchFieldWrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	text-align: center;
`;

export const SearchIconWrapper = styled.span`
	position: absolute;
	left: 15px;
	top: 50%;
	transform: translateY(-50%);
	margin: auto;
	z-index: 2;
`;

export const InputField = styled.input`
	font-size: 16px;
	padding-left: 52px;
	padding-right: 20px;
	height: 52px;
	border-radius: 14px;
	outline: 0px;
	border: 0;
	background-color: #f3f3f3;
	transition: transform 0.2s ease 0s;
	width: 100%;
	display: inline-block;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

	&:focus {
		box-shadow: inset 0 0 0 2px #0066ff;
		transform: scale(1.02);
	}

	&::-webkit-search-cancel-button {
		cursor: pointer;
	}
`;

type SearchFieldProps = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	style?: React.CSSProperties;
	className?: string;
};

export const SearchField: React.FC<SearchFieldProps> = ({
	value,
	onChange,
	placeholder,
	style,
	className,
}) => {
	return (
		<SearchFieldWrapper>
			<SearchIconWrapper>
				<Icon icon={faSearch} />
			</SearchIconWrapper>
			<InputField
				placeholder={placeholder}
				style={style}
				className={className}
				type="search"
				onChange={onChange}
				value={value}
			/>
		</SearchFieldWrapper>
	);
};
