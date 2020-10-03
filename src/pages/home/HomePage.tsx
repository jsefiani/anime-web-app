import * as React from "react";
import styled from "styled-components";

import {
  AnimeSearchProvider,
  AnimeSearchContainer,
  AnimeListContainer,
} from "./containers";
import { Layout } from "layout";

export const HomePage = () => {
  return (
    <AnimeSearchProvider>
      <Layout>
        <AnimeSearchListWrapper>
          <AnimeSearchHeaderWrapper>
            <AnimeHeading>Anime series</AnimeHeading>
            <AnimeSearchContainer />
          </AnimeSearchHeaderWrapper>
          <AnimeListContainer />
        </AnimeSearchListWrapper>
      </Layout>
    </AnimeSearchProvider>
  );
};

const AnimeHeading = styled.h1`
  font-size: 80px;
`;

const AnimeSearchHeaderWrapper = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 30px 0 100px 0;
  text-align: center;
`;

const AnimeSearchListWrapper = styled.div`
  min-height: 100vh;
`;
