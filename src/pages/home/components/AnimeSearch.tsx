import * as React from "react";
import styled from "styled-components";

import { SearchField } from "shared/components";

type AnimeSearchProps = {
  searchQuery: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const AnimeSearch: React.FC<AnimeSearchProps> = ({
  searchQuery,
  handleSearch,
  placeholder,
}) => {
  return (
    <Wrapper>
      <SearchField
        value={searchQuery}
        onChange={handleSearch}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 400px;
  margin: auto;
`;
