import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorPage from "./ErrorPage";
/*
<BrowserRouter>
<Route component={App} path="/" exact />
<Route component={ErrorPage} path="/error" />
</BrowserRouter>
*/

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={App} path="/" exact />
      <Route component={ErrorPage} path="/error" />
    </BrowserRouter>
  );
};

export default Routes;
