import * as React from "react";
import styled from "styled-components";

import { Form, InputField, Divider, Button, useForm } from "shared/components";
import { emailRegex } from "shared/utils/validators";
import { AnimeUser } from "../common/types";

type AnimeAccountDetailsFormProps = {
  saveUserProfile: (user: AnimeUser) => Promise<void>;
  deleteUserProfile: (id: number) => Promise<void>;
};

export const AnimeAccountDetailsForm: React.FC<AnimeAccountDetailsFormProps> = ({
  saveUserProfile,
  deleteUserProfile,
}) => {
  const {
    handleSubmit,
    register,
    errors,
    formMode,
    setEditMode,
    setReadMode,
  } = useForm<AnimeUser>({
    defaultValues: {
      // TODO: Replace hardcoded values with incoming data from container component
      name: "Jawad Sefiani",
      emailAddress: "jawad.sefiani@hotmail.com",
    },
  });

  return (
    <FormWrapper>
      <Form
        onSubmit={handleSubmit(saveUserProfile)}
        mode={formMode}
        setEditMode={setEditMode}
        setReadMode={setReadMode}
      >
        {({ setEditMode, setReadMode, mode }) => (
          <>
            <InputField
              name="name"
              label="Name"
              placeholder="Name"
              hasError={!!errors.name}
              errorMessage={errors.name?.message}
              inputRef={register({
                required: { value: true, message: "Name is required." },
              })}
              mode={formMode}
              type="text"
            />
            <InputField
              name="emailAddress"
              label="Email Address"
              placeholder="Email Address"
              hasError={!!errors.emailAddress}
              errorMessage={errors.emailAddress?.message}
              inputRef={register({
                required: {
                  value: true,
                  message: "Email Address is required.",
                },
                pattern: {
                  value: emailRegex,
                  message: "Email Address must be valid.",
                },
              })}
              mode={formMode}
              type="text"
            />
            <FormButtonsWrapper>
              {mode === "edit" && (
                <>
                  <div style={{ marginRight: 10 }}>
                    <Button type="submit" variant="contained" color="primary">
                      Save
                    </Button>
                  </div>
                  <Button
                    variant="contained"
                    color="default"
                    onClick={setReadMode}
                  >
                    Cancel
                  </Button>
                </>
              )}
              {mode === "read" && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={setEditMode}
                >
                  Edit
                </Button>
              )}
            </FormButtonsWrapper>
          </>
        )}
      </Form>
      <Divider />
      {/* For now the user ID is hardcoded but this should be dynamically set as this data should come from the container component*/}
      <Button onClick={() => deleteUserProfile(12)}>Delete your account</Button>
    </FormWrapper>
  );
};

const FormButtonsWrapper = styled.div`
  display: flex;
`;

const FormWrapper = styled.div`
  padding: 32px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
`;
