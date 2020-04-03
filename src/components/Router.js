import React from "react";
import { Router as BrowserRouter, Switch, Route } from "react-router-dom";

import Greetings from "./Greetings";
import QuestionPage from "./question";
import history from "../utils/history";
import MoodSelection from "./moodSelection";

import * as routes from "../constants/routes";

/**
 * App router
 *
 */
const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route path={routes.GREETINGS} component={Greetings} />
      <Route path={routes.QUESTION} component={QuestionPage} />
      <Route exact path={routes.HOME} component={MoodSelection} />
      <Route path='*' exact={true} component={MoodSelection} />
    </Switch>
  </BrowserRouter>
);

export default Router;
