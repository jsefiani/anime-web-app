import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import { HomePage, ProfilePage } from "pages";
import { SnackbarProvider } from "notistack";
import { ROUTES } from "shared/constants";

// TODO: Add Material UI's and styled components' theme provider to customize theme

const App = () => {
  return (
    <SnackbarProvider>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.PROFILE} component={ProfilePage} />
        </Switch>
      </Router>
    </SnackbarProvider>
  );
};

export default App;
