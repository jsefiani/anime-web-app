import * as React from "react";
import styled from "styled-components";
import { Header } from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      {children}
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  margin: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  min-height: 110vh;
`;
