import * as React from "react";
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinkWrapper = styled.a`
	text-decoration: none;
	color: rgba(0, 0, 0, 0.55);
	font-size: 17px;
	position: relative;
	margin: 0 15px;

	&:hover:after {
		position: absolute;
		bottom: -8px;
		left: 0;
		width: 100%;
		height: 3px;
		background-color: black;
		content: "";
	}

	&:hover {
		color: black;
	}

	&.active {
		color: black;

		&:after {
			position: absolute;
			bottom: -8px;
			left: 0;
			width: 100%;
			height: 3px;
			background-color: black;
			content: "";
		}
	}
`;

type NavLinkProps = {
	children: React.ReactNode;
	to: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ children, to }) => {
	return (
		<NavLinkWrapper as={ReactRouterNavLink} to={to} activeClassName="active">
			{children}
		</NavLinkWrapper>
	);
};
