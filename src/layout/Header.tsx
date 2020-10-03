import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { NavLink, Navigation } from "shared/components";
import { ROUTES } from "shared/constants";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInnerWrapper>
        <Logo to={ROUTES.HOME}>Jawz</Logo>
        <Navigation>
          <NavLink to={ROUTES.PROFILE}>My profile</NavLink>
        </Navigation>
      </HeaderInnerWrapper>
    </HeaderWrapper>
  );
};

export const HeaderWrapper = styled.header`
  box-shadow: 0 1px rgba(0, 0, 0, 0.1);
  padding: 10px 30px;
`;

export const HeaderInnerWrapper = styled.header`
  max-width: 1020px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;
