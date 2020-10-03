import * as React from "react";
import styled from "styled-components";

type NavigationProps = {
  children: React.ReactNode;
};

export const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return (
    <nav>
      <NavigationListWrapper>
        {children && React.Children.map(children, (child) => <li>{child}</li>)}
      </NavigationListWrapper>
    </nav>
  );
};

const NavigationListWrapper = styled.ul`
  display: flex;
  list-style: none;
`;
