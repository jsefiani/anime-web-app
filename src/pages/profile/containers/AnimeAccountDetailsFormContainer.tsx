import * as React from "react";
import { AnimeAccountDetailsForm } from "../components";

import { useToast } from "shared/components";
import { AnimeUser } from "../common/types";

// TODO: Query user's info and pass it along to the presentational component
export const AnimeAccountDetailsFormContainer = () => {
  const { openToast } = useToast();

  const saveUserProfile = async (user: AnimeUser) => {
    try {
      // Do some business logic...
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          reject();
        }, 500)
      );
    } catch {
      openToast("Oops... Something went wrong.", { variant: "error" });
    }
  };

  const deleteUserProfile = async (id: number) => {
    // TODO: Ask for confirmation before attempting to delete the account
    try {
      // Do some business logic...
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          reject();
        }, 500)
      );
    } catch {
      openToast("Oops... Something went wrong.", { variant: "error" });
    }
  };
  return (
    <AnimeAccountDetailsForm
      saveUserProfile={saveUserProfile}
      deleteUserProfile={deleteUserProfile}
    />
  );
};
