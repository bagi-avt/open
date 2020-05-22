import React from "react";
import { Route, BrowserRouter, Router } from "react-router-dom";

import history from "./history";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";

function App() {
    return (
        <BrowserRouter>
            <Router history={history}>
                <HeaderContainer />
                <Route path="/" render={() => <HomeContainer />} />
            </Router>
        </BrowserRouter>
    );
}

export default App;
