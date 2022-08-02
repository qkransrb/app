import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
