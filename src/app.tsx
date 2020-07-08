import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage } from "pages/home.page";
import { ProfilePage } from "pages/profile.page";
import { CssBaseline } from "@material-ui/core";
import { SnackbarProvider } from "notistack";

// TODO: Add Material UI's and styled components' theme provider to customize theme

const App = () => {
	return (
		<SnackbarProvider>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/profile" component={ProfilePage} />
				</Switch>
			</Router>
		</SnackbarProvider>
	);
};

export default App;
