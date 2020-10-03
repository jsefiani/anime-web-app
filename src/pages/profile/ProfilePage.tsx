import * as React from "react";
import styled from "styled-components";
import { Layout } from "layout";

import { AnimeAccountDetailsFormContainer } from "./containers";

export const ProfilePage = () => {
  return (
    <Layout>
      <AnimeAccountDetailsWrapper>
        <h1>My profile</h1>
        <AnimeAccountDetailsFormContainer />
      </AnimeAccountDetailsWrapper>
    </Layout>
  );
};

const AnimeAccountDetailsWrapper = styled.div`
  max-width: 500px;
  margin: 0px auto;
  padding: 30px 24px;
  height: 100%;
  width: 100%;
`;
