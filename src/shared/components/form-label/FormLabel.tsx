import * as React from "react";
import styled from "styled-components";

export const withFormLabel = <T extends { label: string }>(
  Component: React.FC<T>
) => (props: T) => {
  return (
    <FieldWrapper>
      <FormLabel htmlFor={props.label}>{props.label}</FormLabel>
      <Component {...props} label="" />
    </FieldWrapper>
  );
};

const FieldWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
`;
